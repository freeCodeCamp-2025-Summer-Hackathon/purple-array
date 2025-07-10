import Word from '../models/Word.js';

export const setWord = async () => {
    const words = await Word.find();
    const { word, pronunciation, definition } =
        words[Math.floor(Math.random() * words.length)];
    return { word, pronunciation, definition };
};
