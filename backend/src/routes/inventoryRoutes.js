import express from 'express';
import { getUserInventory } from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', getUserInventory);

export default router;
