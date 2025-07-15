import { Word, WordOfTheDay } from '../models/Word.js';
import schedule from 'node-schedule';

export const wordObj = {
    previousWord: {},
    currentWord: {},
    nextWord: {},
};

export const initWord = async () => {
    if (Object.keys(wordObj.previousWord).length === 0) {
        wordObj.previousWord = await setWord();
        wordObj.currentWord = await setWord();
        wordObj.nextWord = await setWord();

        const newWord = new WordOfTheDay({
            previousWord: wordObj.previousWord,
            currentWord: wordObj.currentWord,
            nextWord: wordObj.nextWord,
        });
        const _savedWord = await newWord.save();
    }
};

const setWord = async () => {
    const word = await Word.aggregate([
        {
            $match: { word: { $ne: wordObj.previousWord.word } },
        },
        {
            $match: { word: { $ne: wordObj.currentWord.word } },
        },
    ]).sample(1);
    return word[0];
};

// example of executing the start of every day in the UTC timezone
// default value of a component is null
// if minute not explicitly set to 0, rule will run every minute
const rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.minute = 0;
rule.tz = 'Etc/UTC';

const _job = schedule.scheduleJob({ rule }, async function () {
    const lastUsed = new Date();
    const words = await Word.findById(wordObj.currentWord._id);

    let history = [];
    if (words !== null) {
        history = words.history;
    }
    history.push(lastUsed);
    const _updatedWord = await Word.findByIdAndUpdate(wordObj.currentWord._id, {
        lastUsed,
        history,
    });

    wordObj.previousWord = wordObj.currentWord;
    wordObj.currentWord = wordObj.nextWord;
    wordObj.nextWord = await setWord();

    const newWord = new WordOfTheDay({
        previousWord: wordObj.previousWord,
        currentWord: wordObj.currentWord,
        nextWord: wordObj.nextWord,
    });
    const _savedWord = await newWord.save();
});
