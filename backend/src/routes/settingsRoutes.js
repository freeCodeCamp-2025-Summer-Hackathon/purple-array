import express from 'express';
import { getAllSettings } from '../controllers/settingsController.js';

const router = express.Router();

router.get('/:id', getAllSettings); // TODO: will need to include user id in path until auth and sessions are working

export default router;
