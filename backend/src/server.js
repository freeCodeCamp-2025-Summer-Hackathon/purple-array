import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import marketsRoutes from './routes/marketsRoutes.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());

app.use('/markets', marketsRoutes);

app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
});
