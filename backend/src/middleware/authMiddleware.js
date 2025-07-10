import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export function userVerification(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ status: false });
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
        if (err) {
            return res.status(401).json({ status: false });
        } else {
            const user = await User.findById(data.id, '_id');
            if (user) return res.json({ status: true, _id: user._id });
            else return res.status(401).json({ status: false });
        }
    });
}
