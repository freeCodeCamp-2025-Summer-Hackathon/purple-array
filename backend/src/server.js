import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productsRoutes from './routes/productsRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import wordsRoutes from './routes/wordsRoutes.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
if (process.env.NODE_ENV !== 'production') {
    app.use(cors({ origin: 'http://localhost:5173' }));
}

app.use(express.json());

app.use('/word', wordsRoutes);
app.use('/products', productsRoutes);
app.use('/settings', settingsRoutes);

app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
});
