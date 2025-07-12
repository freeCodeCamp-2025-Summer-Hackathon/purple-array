import { Word } from '../models/Word.js';
import { wordObj } from '../helpers/wordHelper.js';

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
        const userID = req.id;
        const lastUsed = new Date();

        const words = await Word.findById(wordObj.currentWord._id);

        let history = [];
        if (words !== null) {
            history = words.history;
        }
        history.push({ id: userID, lastUsed });
        const _updatedWord = await Word.findByIdAndUpdate(
            wordObj.currentWord._id,
            {
                lastUsed,
                history,
            }
        );

        const { word, pronunciation, definition } = wordObj.currentWord;
        res.status(200).json({ word, pronunciation, definition });
    } catch (error) {
        console.error('Error in getWord controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
