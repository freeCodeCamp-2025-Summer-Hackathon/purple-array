import User from '../models/User.js';
import { createToken } from '../utils/auth.js';
import { validate } from '../utils/passwordValidation.js';
import bcrypt from 'bcrypt';

function setCookie(res, userId) {
    const token = createToken(userId);
    res.cookie('token', token, {
        withCredentials: true,
        httpOnly: false,
    });
}

export async function signup(req, res, next) {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        if (validate(password) === false) {
            return res.status(400).json({
                message:
                    'Invalid password. Your password must be between 8 - 32 characters and include lowercase and uppercase letters, numbers, and a symbol.',
            });
        }
        const user = await User.create({ email, password });
        setCookie(res, user._id);
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

export async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Email and password required' });
        }
        const user = await User.findOne({ email }, '_id password');
        if (!user) {
            return res
                .status(400)
                .json({ message: 'Incorrect password or email' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res
                .status(400)
                .json({ message: 'Incorrect password or email' });
        }
        setCookie(res, user._id);
        res.status(201).json({
            message: 'User logged in successfully',
            success: true,
        });
        next();
    } catch (error) {
        console.error('Error in login', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
