// Import dotenv for mongo variables
import dotenv from 'dotenv';
dotenv.config();

// Import required package modules
import mongoose from 'mongoose';
import fs from 'fs';

// Import schemas
import { Word } from './src/models/Word.js';
import User from './src/models/User.js';

// Parse JSON placeholder files to arrays
const journalEntries = JSON.parse(
    fs.readFileSync('../frontend/public/placeholderJournalEntries.json', 'utf8')
);
const wordData = JSON.parse(
    fs.readFileSync('../frontend/public/wordDict.json', 'utf8')
);

// Create user variables
const emails = ['johndoe@testmail.com', 'janedoe@testmail.com'];
const timeZones = ['EST', 'JST'];
const coins = [100, 500];
const password = 'password123';

// Create a reference point for jounral entries
const today = new Date();
today.setHours(0, 0, 0, 0);

// Filter out future entries
const pastEntries = journalEntries.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate < today;
});

// Create user objects
const users = [];

for (let i = 0; i < 2; i++) {
    users.push({
        email: emails[i],
        password: password,
        coins: coins[i],
        settings: {
            timezone: timeZones[i],
        },
        journal: pastEntries,
    });
}

const user1 = new User(users[0]);
const user2 = new User(users[1]);

async function seedDataBase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MONGODB CONNECTED');

        // Clear existing words amd users
        await Word.deleteMany();
        await User.deleteMany();

        // Save words to DB, log successful
        const wordResult = await Word.insertMany(wordData);
        console.log(`Successfully inserted ${wordResult.length} words`);

        // Save users to DB, log successful
        await user1.save();
        await user2.save();
        console.log(`Successfully inserted ${users.length} users`);
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

seedDataBase();
