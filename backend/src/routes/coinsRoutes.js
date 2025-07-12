import express from 'express';
import { getAllCoins } from '../controllers/coinsController.js';

const router = express.Router();

router.get('/', getAllCoins);

export default router;
