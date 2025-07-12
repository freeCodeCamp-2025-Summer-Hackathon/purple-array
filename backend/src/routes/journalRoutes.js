import express from 'express';
import { writeJournal } from '../controllers/journalController.js';

const router = express.Router();

router.put('/', writeJournal);

export default router;
