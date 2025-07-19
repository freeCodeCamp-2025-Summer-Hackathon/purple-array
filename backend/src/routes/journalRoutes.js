import express from 'express';
import {
    writeJournal,
    getJournal,
    deleteJournal,
} from '../controllers/journalController.js';

const router = express.Router();

router.put('/', writeJournal);
router.get('/', getJournal);
router.delete('/:yearMonthDay', deleteJournal);

export default router;
