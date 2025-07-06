import express from 'express';
import { getAllMarkets } from '../controllers/marketController.js';

const router = express.Router();

router.get('/', getAllMarkets);

export default router;
