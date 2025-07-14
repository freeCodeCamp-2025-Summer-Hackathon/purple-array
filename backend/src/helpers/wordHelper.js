import { Word, WordOfTheDay } from '../models/Word.js';
import schedule from 'node-schedule';

export const wordObj = {
    previousWord: {},
    currentWord: {},
    nextWord: {},
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
