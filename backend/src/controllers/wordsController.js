import { Word } from '../models/Word.js';
import User from '../models/User.js';
import { timeZoneObj } from '../utils/wordHelper.js';

export async function addWord(req, res) {
    try {
        const { word, pronunciation, definition } = req.body;
        const newWord = new Word({ word, pronunciation, definition });
        const savedWord = await newWord.save();
        res.status(201).json(savedWord);
    } catch (error) {
        console.error('Error in adgitdWord controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getWord(req, res) {
    try {
        const user = await User.findById(req.id);
        const timezone = user.settings.timezone;
        console.log(timeZoneObj['America/New_York']);
        console.log(timeZoneObj['Asia/Tokyo']);
        const { word, pronunciation, definition } =
            timeZoneObj[timezone].currentWord;

        res.status(200).json({ word, pronunciation, definition });
    } catch (error) {
        console.error('Error in getWord controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
