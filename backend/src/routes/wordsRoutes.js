import express from 'express';
import { addWord, getWord } from '../controllers/wordsController.js';

const router = express.Router();

router.get('/', getWord);
router.post('/', addWord);

export default router;
