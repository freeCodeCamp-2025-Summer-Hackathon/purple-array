import express from 'express';
import {
    getAllSettings,
    patchSettings,
} from '../controllers/settingsController.js';

const router = express.Router();

router.get('/', getAllSettings);
router.patch('/', patchSettings);

export default router;
