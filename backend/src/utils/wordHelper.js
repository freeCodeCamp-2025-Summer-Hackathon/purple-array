import { Word, WordOfTheDay } from '../models/Word.js';
import schedule from 'node-schedule';
import { DateTime, Settings } from 'luxon';

// overriding luxon global default zone for consistent timezone operations
Settings.defaultZone = 'utc';
export const timeZonesList = Intl.supportedValuesOf('timeZone');
export const serverDate = DateTime.utc();

const wordQueue = [];

// default word structure and storage object for consistency across timezones
export const wordObj = {
    previousWord: {},
    currentWord: {},
    nextWord: {},
};

// an object to store each supported timezone keys and wordObj values
export const timeZoneObj = {};

// Currently selects new words every time server resets
// TODO: Check WordoftheDay to pull down the previousWord/currentWord/nextWord matching the current date
// Why?: Once we're all pulling from the same database, the words will get reset every time someone starts the server
export const initWord = async () => {
    wordObj['previousWord'] = await setWord();
    wordObj['currentWord'] = await setWord();
    wordObj['nextWord'] = await setWord();

    wordQueue.push(wordObj);
    wordQueue.push({
        previousWord: wordObj['currentWord'],
        currentWord: wordObj['nextWord'],
        nextWord: await setWord(),
    });

    storeWordHistory();

    const newWord = new WordOfTheDay({
        previousWord: wordObj['previousWord'],
        currentWord: wordObj['currentWord'],
        nextWord: wordObj['nextWord'],
    });
    const _savedWord = await newWord.save();

    // init timezone words
    timeZonesList.forEach((timezone) => {
        timeZoneObj[timezone] = wordObj;
        setTimezoneWords(timezone);
    });

    // scheduleWordOfTheDayUpdate();
    scheduleWordUpdate();
};

const getRandomInt = async (max) => {
    return Math.floor(Math.random() * max);
};

// Currently selects a word not equal to the previousWord or currentWord
// STRETCH: Pick a word that has either never been used or has been used over X days ago (based on how many words available)
const setWord = async () => {
    const words = await Word.find();

    const excludedWords = [];

    wordQueue.forEach((usedWord) =>
        excludedWords.push(
            usedWord['previousWord'],
            usedWord['currentWord'],
            usedWord['nextWord']
        )
    );

    const filteredWords = words.filter(
        (item) => !excludedWords.includes(item.word)
    );

    const randomWord = filteredWords[await getRandomInt(words.length)];

    return {
        _id: randomWord._id,
        word: randomWord.word,
        pronunciation: randomWord.pronunciation,
        definition: randomWord.definition,
    };
};

/* Updates currentWord's lastUsed date and also appends the date to history */
const storeWordHistory = async () => {
    const lastUsed = new Date();
    const _updatedWord = await Word.findByIdAndUpdate(wordObj.currentWord._id, {
        $push: { history: lastUsed },
        $set: { lastUsed: lastUsed },
    }).exec();
};

// function to handle offsets greater than utc
// objects with offsets less than utc should be updated on their schedule
const setTimezoneWords = async (timezone) => {
    // let yesterday = serverDate.minus({ day: 1 });
    // let today = serverDate;
    let tomorrow = serverDate.plus({ day: 1 });
    let dt = DateTime.utc().setZone(timezone);

    if (dt.day == tomorrow.day) {
        // console.log('next day', timezone, timeZoneObj[timezone]);
        timeZoneObj[timezone] = wordQueue[1];
    } else {
        // console.log('today', timezone, timeZoneObj[timezone]);
        timeZoneObj[timezone] = wordQueue[0];
    }
};

// const scheduleWordOfTheDayUpdate = async () => {
//     let rule = new schedule.RecurrenceRule();
//     rule.hour = 0;
//     rule.minute = 0;
//     rule.tz = 'Etc/UTC';

//     const _job = schedule.scheduleJob({ rule }, async function () {
//         const newWord = new WordOfTheDay({
//             previousWord: wordObj['currentWord'],
//             currentWord: wordObj['nextWord'],
//             nextWord: wordQueue[1]['nextWord'],
//         });
//         const _savedWord = await newWord.save();

//         wordObj = wordQueue.shift();
//         wordQueue.push({
//             previousWord: wordObj['currentWord'],
//             currentWord: wordObj['nextWord'],
//             nextWord: await setWord(),
//         });
//     });
// };

const scheduleWordUpdate = async () => {
    timeZonesList.forEach((timezone) => {
        storeWordHistory();

        // let dt = DateTime.utc().setZone(timezone);

        let rule = new schedule.RecurrenceRule();
        rule.hour = 0; // dt.hour;
        rule.minute = 0; // dt.minute;
        rule.tz = timezone;

        const _job = schedule.scheduleJob({ rule }, async function () {
            setTimezoneWords(timezone);
        });
    });
};
