import Word from '../models/Word.js';

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
