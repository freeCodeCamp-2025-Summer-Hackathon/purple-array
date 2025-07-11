import express from 'express';
import { getAllSettings } from '../controllers/settingsController.js';

const router = express.Router();

router.get('/', getAllSettings);

export default router;
