import express from 'express';
import { signup, login } from '../controllers/authController.js';
import { userVerification } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', userVerification);
router.post('/signup', signup);
router.post('/login', login);

export default router;
