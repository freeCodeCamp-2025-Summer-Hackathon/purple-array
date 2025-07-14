import express from 'express';
import { writeJournal, getJournal } from '../controllers/journalController.js';

const router = express.Router();

router.put('/', writeJournal);
router.get('/', getJournal);

export default router;
