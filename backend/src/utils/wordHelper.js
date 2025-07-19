import { Word, WordOfTheDay } from '../models/Word.js';
import schedule from 'node-schedule';
import { DateTime, Settings } from 'luxon';

// overriding luxon global default zone for consistent timezone operations
Settings.defaultZone = 'utc';
export const timeZonesList = Intl.supportedValuesOf('timeZone');
export const serverDate = DateTime.utc();

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
    if (Object.keys(wordObj.previousWord).length === 0) {
        wordObj.previousWord = await setWord();
        wordObj.currentWord = await setWord();
        wordObj.nextWord = await setWord();

        storeWordHistory();

        const newWord = new WordOfTheDay({
            previousWord: wordObj.previousWord,
            currentWord: wordObj.currentWord,
            nextWord: wordObj.nextWord,
        });
        const _savedWord = await newWord.save();
    }

    timeZonesList.forEach((timezone) => {
        timeZoneObj[timezone] = {
            previousWord: wordObj.previousWord,
            currentWord: wordObj.currentWord,
            nextWord: wordObj.nextWord,
        };
    });

    scheduleWordUpdate();
};

// Currently selects a word not equal to the previousWord or currentWord
// STRETCH: Pick a word that has either never been used or has been used over X days ago (based on how many words available)
const setWord = async () => {
    const word = await Word.aggregate([
        {
            $match: { word: { $ne: wordObj.previousWord.word } },
        },
        {
            $match: { word: { $ne: wordObj.currentWord.word } },
        },
    ]).sample(1);
    return {
        _id: word[0]._id,
        word: word[0].word,
        pronunciation: word[0].pronunciation,
        definition: word[0].definition,
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

// example of executing the start of every day in the UTC timezone
// default value of a component is null
// if minute not explicitly set to 0, rule will run every minute
// const rule = new schedule.RecurrenceRule();
// rule.hour = 0;
// rule.minute = 0;
// rule.tz = 'Etc/UTC';

// Remove or refactor the following once minimum testing completed
// const _job = schedule.scheduleJob({ rule }, async function () {
//     const _words = await Word.findById(wordObj.currentWord._id);

//     storeWordHistory();

//     wordObj.previousWord = wordObj.currentWord;
//     wordObj.currentWord = wordObj.nextWord;
//     wordObj.nextWord = await setWord();

//     const newWord = new WordOfTheDay({
//         previousWord: wordObj.previousWord,
//         currentWord: wordObj.currentWord,
//         nextWord: wordObj.nextWord,
//     });
//     const _savedWord = await newWord.save();
// });

const setTimezoneWords = async (timezone, offset) => {
    if (offset > serverDate.offset) {
        timeZoneObj[timezone] = {
            previousWord: wordObj.currentWord,
            currentWord: wordObj.nextWord,
            nextWord: await setWord(),
        };
    } else {
        timeZoneObj[timezone] = {
            previousWord: wordObj.previousWord,
            currentWord: wordObj.currentWord,
            nextWord: wordObj.nextWord,
        };
    }
};

const scheduleWordUpdate = async () => {
    storeWordHistory();
    wordObj.previousWord = wordObj.currentWord;
    wordObj.currentWord = wordObj.nextWord;
    wordObj.nextWord = await setWord();

    const newWord = new WordOfTheDay({
        previousWord: wordObj.previousWord,
        currentWord: wordObj.currentWord,
        nextWord: wordObj.nextWord,
    });

    const _savedWord = await newWord.save();
    timeZonesList.forEach((timezone) => {
        let dt = DateTime.utc()
            .set({ hour: 0, minute: 0, second: 0 })
            .setZone(timezone);

        let rule = new schedule.RecurrenceRule();
        //rule.hour = dt.hour;
        //rule.minute = dt.minute;
        rule.tz = timezone;

        if (dt.offset > serverDate.offset) {
            //console.log(dt, true);
        }

        const _job = schedule.scheduleJob({ rule }, async function () {
            //console.log(dt.toString());
            //console.log(timezone, 'Your notification message is here.');

            setTimezoneWords(timezone, dt.offset);
            // timeZoneObj[timezone] = {
            //     previousWord: wordObj.previousWord,
            //     currentWord: wordObj.currentWord,
            //     nextWord: wordObj.nextWord,
            // };
        });
    });
};
