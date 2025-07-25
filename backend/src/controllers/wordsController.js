import User from '../models/User.js';
import { Word } from '../models/Word.js';
import { wordObj } from '../utils/wordHelper.js';
import { DateTime } from 'luxon';

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
        const { settings } = await User.findById(req.id, 'settings -_id');
        if (settings.timezone !== 'Default') {
            const userDay = DateTime.local({ zone: settings.timezone }).day;
            const utcDay = DateTime.utc().day;
            if (userDay === utcDay - 1 || (utcDay === 1 && userDay > 2)) {
                const { word, pronunciation, definition } =
                    wordObj.previousWord;
                return res
                    .status(200)
                    .json({ word, pronunciation, definition });
            } else if (
                userDay === utcDay + 1 ||
                (utcDay === 1 && userDay > 2)
            ) {
                const { word, pronunciation, definition } = wordObj.nextWord;
                return res
                    .status(200)
                    .json({ word, pronunciation, definition });
            }
        }
        const { word, pronunciation, definition } = wordObj.currentWord;
        res.status(200).json({ word, pronunciation, definition });
    } catch (error) {
        console.error('Error in getWord controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
