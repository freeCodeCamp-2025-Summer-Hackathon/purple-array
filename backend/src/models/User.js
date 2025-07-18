import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'You must provide an email address'],
            unique: [true, 'Email has been used'],
        },
        password: {
            type: String,
            required: [true, 'You must provide a password'],
        },
        settings: {
            // will need to add a new category for each upgrade type
            timezone: {
                type: String,
                default: 'Default',
            },
            theme: {
                // light and dark, maybe future themes
                type: String,
                default: 'Default',
            },
            font: {
                type: String,
                default: 'Default',
            },
            ink: {
                type: String,
                default: 'Default',
            },
            parchment: {
                type: String,
                default: 'Default',
            },
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
        admin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

// salt and hash the password before storing
userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password, 12); // 12 salt rounds before hash
        next();
    } catch (error) {
        next(error); // pass errors to next middleware
    }
});

const User = mongoose.model('User', userSchema);

export default User;
