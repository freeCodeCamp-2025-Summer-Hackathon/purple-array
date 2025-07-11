import express from 'express';
import { addWord } from '../controllers/wordsController.js';

const router = express.Router();

router.post('/', addWord);

export default router;
