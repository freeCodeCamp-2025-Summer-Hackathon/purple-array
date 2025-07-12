import mongoose from 'mongoose';

const journalSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: '',
    },
    period: {
        type: Date,
    },
    history: {
        type: Array,
    },
});

const Journal = mongoose.model('Journal', journalSchema);
export default Journal;
