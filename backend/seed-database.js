// Import dotenv for mongo variables
import dotenv from 'dotenv';
dotenv.config();

// Import required package modules
import mongoose from 'mongoose';
import fs from 'fs';

// Import schemas
import { Word } from './src/models/Word.js';
import User from './src/models/User.js';
import Product from './src/models/Product.js';

// Parse JSON placeholder files to arrays
const journalEntries = JSON.parse(
    fs.readFileSync('../frontend/public/placeholderJournalEntries.json', 'utf8')
);

const activeEntries = journalEntries
    .filter((entry) => entry.active !== false)
    .reverse();

const wordData = JSON.parse(
    fs.readFileSync('../frontend/public/placeholderWords.json', 'utf8')
);

const activeWords = wordData.filter((word) => word.active !== false);

const marketItems = JSON.parse(
    fs.readFileSync('../frontend/public/placeholderMarketItems.json', 'utf8')
);

// Create user variables
const emails = ['johndoe@testmail.com', 'janedoe@testmail.com'];
const timeZones = ['America/New_York', 'Asia/Tokyo'];
const coins = [100, 500];
const password = 'password123';
const userInventory = { theme: ['Sunset'], font: [], ink: [], parchment: [] };
const indices = [0, 4, 8];
const purchasedItems = indices
    .map((index) => marketItems[index])
    .filter(Boolean);

// Create a reference point for journal entries
const today = new Date();
today.setHours(0, 0, 0, 0);

// Filter out future entries
const pastEntries = activeEntries.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate < today;
});

const rewardData = pastEntries
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((entry) => ({
        date: entry.date,
        reward: 4,
    }));

// Create user objects
const users = [];

for (let i = 0; i < 2; i++) {
    users.push({
        email: emails[i],
        password: password,
        settings: {
            timezone: timeZones[i],
        },
        inventory: userInventory,
        coins: coins[i],
        journal: pastEntries,
        rewards: rewardData,
    });
}

const user1 = new User(users[0]);
const user2 = new User(users[1]);

// Give user1 inventory items
purchasedItems.forEach((item) => {
    if (item.tags.includes('parchment')) {
        user1.inventory.parchment.push(item.name);
    } else if (item.tags.includes('font')) {
        user1.inventory.font.push(item.name);
    } else if (item.tags.includes('ink')) {
        user1.inventory.ink.push(item.name);
    } else {
        user1.inventory.theme.push(item.name);
    }
});

async function seedDataBase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MONGODB CONNECTED');

        // Clear existing words, users, and products
        await Word.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();

        // Save words to DB, log successful
        const wordResult = await Word.insertMany(activeWords);
        console.log(`Successfully inserted ${wordResult.length} words`);

        // Save users to DB, log successful
        await user1.save();
        await user2.save();
        console.log(`Successfully inserted ${users.length} users`);

        const productResult = await Product.insertMany(marketItems);
        console.log(`Successfully inserted ${productResult.length} products`);
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

seedDataBase();
