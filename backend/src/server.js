import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';

import productsRoutes from './routes/productsRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import wordsRoutes from './routes/wordsRoutes.js';
import authRoutes from './routes/authRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import journalRoutes from './routes/journalRoutes.js';
import { userVerification } from './middleware/authMiddleware.js';
import { initWord } from './utils/wordHelper.js';
import coinsRoutes from './routes/coinsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
if (process.env.NODE_ENV !== 'production') {
    app.use(
        cors({
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
            credentials: true,
        })
    );
}

app.use(cookieParser());

app.use(express.json());

app.use('/', authRoutes);
app.use('/word', userVerification, wordsRoutes);
app.use('/products', userVerification, productsRoutes);
app.use('/settings', userVerification, settingsRoutes);
app.use('/inventory', userVerification, inventoryRoutes);
app.use('/journal', userVerification, journalRoutes);
app.use('/coins', userVerification, coinsRoutes);
app.use('/users', userVerification, usersRoutes);

app.listen(PORT, () => {
    initWord();
    console.log('Server started on PORT:', PORT);
});
