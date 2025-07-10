import express from 'express';
import { addWord, getWord } from '../controllers/wordsController.js';

const router = express.Router();

router.get('/:id', getWord); // TODO: will need to include user id in path until auth and sessions are working
router.post('/', addWord);

export default router;
