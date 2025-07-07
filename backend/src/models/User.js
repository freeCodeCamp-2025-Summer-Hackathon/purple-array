import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'You must provide an email address'],
            unique: [true, 'Email has been used'],
        },
        password: {
            // encrypt first
            type: String,
            required: [true, 'You must provide a password'],
        },
        settings: {
            // will need to add a new category for each upgrade type
            timezone: String,
            theme: String, // light and dark, maybe future themes
            font: String,
            ink: String,
            parchment: String,
        },
        inventory: {
            // will need to add a new category for each upgrade type
            theme: [String], // stretch goal
            font: [String],
            ink: [String],
            parchment: [String],
        },
        coins: {
            type: Number,
            default: 0,
        },
        journal: [
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
        rewards: [
            {
                // stores the current month's rewards in date order
                date: String, // year-month-date, e.g. 2025-07-05
                reward: Number,
            },
        ],
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
