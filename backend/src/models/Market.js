import mongoose from 'mongoose';

const marketSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cost: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Market = mongoose.model('Market', marketSchema);

export default Market;
