import express from 'express';
import {
    getAllProducts,
    createProduct,
    putProduct,
} from '../controllers/productsController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.put('/:product_id', putProduct);
router.post('/', createProduct);

export default router;
