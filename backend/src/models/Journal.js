import mongoose from 'mongoose';

const journalSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: '',
    },
    period: {
        type: String,
        default: '',
    },
    journal: {
        type: [
            {
                // stores the current month's entries in date order
                date: String, // year-month-date, e.g. 2025-07-05
                word: String,
                response: String,
                optionalPrompt1: String,
                response1: String,
                optionalPrompt2: String,
                response2: String,
                optionalPrompt3: String,
                response3: String,
            },
        ],
    },
});

const Journal = mongoose.model('Journal', journalSchema);
export default Journal;
