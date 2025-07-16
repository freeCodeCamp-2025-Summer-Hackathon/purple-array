import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema(
    {
        word: {
            type: String,
            required: [true, 'please provide a word'],
            minlength: 2,
        },
        pronunciation: {
            type: String,
            required: [true, 'please provide the pronunciation'],
            minlength: 2,
        },
        definition: {
            type: String,
            required: [true, 'please provide the definition'],
            minlength: 2,
        },
        lastUsed: {
            type: Date,
        },
        history: {
            type: [Date],
            default: [],
        },
    },
    { timestamps: true, minimize: false }
);

const wordOfTheDaySchema = new mongoose.Schema(
    {
        previousWord: {
            word: {
                type: String,
                required: [true, 'please provide a word'],
                minlength: 2,
            },
            pronunciation: {
                type: String,
                required: [true, 'please provide the pronunciation'],
                minlength: 2,
            },
            definition: {
                type: String,
                required: [true, 'please provide the definition'],
                minlength: 2,
            },
        },
        currentWord: {
            word: {
                type: String,
                required: [true, 'please provide a word'],
                minlength: 2,
            },
            pronunciation: {
                type: String,
                required: [true, 'please provide the pronunciation'],
                minlength: 2,
            },
            definition: {
                type: String,
                required: [true, 'please provide the definition'],
                minlength: 2,
            },
        },
        nextWord: {
            word: {
                type: String,
                required: [true, 'please provide a word'],
                minlength: 2,
            },
            pronunciation: {
                type: String,
                required: [true, 'please provide the pronunciation'],
                minlength: 2,
            },
            definition: {
                type: String,
                required: [true, 'please provide the definition'],
                minlength: 2,
            },
        },
    },
    { timestamps: true, minimize: false }
);

export const Word = mongoose.model('Word', wordSchema);
export const WordOfTheDay = mongoose.model('WordOfTheDay', wordOfTheDaySchema);

export default { Word, WordOfTheDay };
