import Word from '../models/Word.js';
import User from '../models/User.js';
import schedule from 'node-schedule';
import { setWord } from '../helpers/wordHelper.js';

const wordObj = {
    pastWord: {},
    currentWord: {},
};

const rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.minute = 0;
rule.tz = 'Etc/UTC';

const _job = schedule.scheduleJob(rule, async function () {
    wordObj.pastWord = wordObj.currentWord;
    wordObj.currentWord = await setWord();
});

export async function addWord(req, res) {
    try {
        const { word, pronunciation, definition } = req.body;
        const newWord = new Word({ word, pronunciation, definition });
        const savedWord = await newWord.save();
        res.status(201).json(savedWord);
    } catch (error) {
        console.error('Error in addWord controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getWord(req, res) {
    try {
        const user = await User.findById(req.params.id);
        console.log(user);
        res.status(200).json(wordObj.currentWord);
    } catch (error) {
        console.error('Error in getWord controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
