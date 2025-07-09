import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productsRoutes from './routes/productsRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import wordsRoutes from './routes/wordsRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());

app.use('/', authRoutes);
app.use('/word', wordsRoutes);
app.use('/products', productsRoutes);
app.use('/settings', settingsRoutes);

app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
});
