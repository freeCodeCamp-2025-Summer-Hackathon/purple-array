import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productsRoutes from './routes/productsRoutes.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());

app.use('/products', productsRoutes);

app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
});
