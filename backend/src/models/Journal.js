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
        type: [mongoose.Schema.Types.ObjectId],
    },
});

const Journal = mongoose.model('Journal', journalSchema);
export default Journal;
