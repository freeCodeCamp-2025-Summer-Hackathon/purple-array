import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
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
});

const Word = mongoose.model('Word', wordSchema);

export default Word;
