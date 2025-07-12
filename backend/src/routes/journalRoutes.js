import express from 'express';

import { getJournal } from '../controllers/journalController.js';
const router = express.Router();

router.route('/').get(getJournal);

export default router;
