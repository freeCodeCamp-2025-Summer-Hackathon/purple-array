import User from '../models/User.js';
import { createToken } from '../utils/auth.js';

export async function signup(req, res, next) {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({
            message: 'Sign up and sign in successful',
            success: true,
            user,
        });
        next();
    } catch (error) {
        console.error('Error in signup', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
