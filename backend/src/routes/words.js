import express from 'express';
const router = express.Router();
import {addWord} from '../controllers/words.js'


router.post('/create', addWord)

export default router;