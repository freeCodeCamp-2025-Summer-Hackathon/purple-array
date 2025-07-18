import express from 'express';
import { getAllProducts } from '../controllers/productsController.js';
import { putProduct } from '../controllers/productsController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.put('/:product_id', putProduct);
export default router;
