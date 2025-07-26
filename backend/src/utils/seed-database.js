// Import dotenv for mongo variables
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

// Import required package modules
import mongoose from 'mongoose';
import { DateTime, Settings } from 'luxon';

// Import schemas
import { Word, WordOfTheDay } from '../models/Word.js';
import User from '../models/User.js';
import Product from '../models/Product.js';

// Import test data
import { users, words, journals, products } from './data.js';

// Override default system zone
Settings.defaultZone = 'utc';

// Create a reference point for journal entries
const today = DateTime.local();
today.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });

// Filter out future entries
const pastEntries = journals.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate < today;
});

async function seedDataBase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MONGODB CONNECTED');

        // Clear existing words amd users
        await Word.deleteMany();
        await User.deleteMany();
        await WordOfTheDay.deleteMany();
        await Product.deleteMany();

        // Save words to DB, log successful
        const wordResult = await Word.insertMany(words);
        console.log(`Successfully inserted ${wordResult.length} words`);

        // Save users to DB, log successful
        for (let i = 0; i < users.length; i++) {
            let { email, password, coins, settings } = users[i];
            await User.create({
                email,
                password,
                coins,
                settings,
                journal: pastEntries,
            });
        }
        console.log(`Successfully inserted ${users.length} users`);

        // Save products to DB, log successful
        const productResult = await Product.insertMany(products);
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
