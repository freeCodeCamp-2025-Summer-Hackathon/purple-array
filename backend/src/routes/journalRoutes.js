import express from 'express';
import {
    writeJournal,
    getJournal,
    getUser,
} from '../controllers/journalController.js';

const router = express.Router();

router.put('/', writeJournal);
router.get('/', getJournal);
router.get('/user', getUser); // TODO: remove or relocate this later - using for testing

export default router;
