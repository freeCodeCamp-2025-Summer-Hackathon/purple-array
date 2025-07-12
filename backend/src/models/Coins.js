import mongoose from 'mongoose';

const coinsSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: [
            {
                type: String,
                required: true,
            },
        ],
    },
    { timestamps: true }
);

const Coins = mongoose.model('Coins', coinsSchema);

export default Coins;
