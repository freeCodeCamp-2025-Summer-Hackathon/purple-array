import express from 'express';
import { getAllProducts } from '../controllers/productsController.js';

const router = express.Router();

router.get('/', getAllProducts);

export default router;
