import User from '../models/User.js';

export async function getAllCoins(req, res) {
    try {
        const coins = await User.findById(req.id, 'coins -_id');
        res.status(200).json(coins);
    } catch (error) {
        console.error('Error in getAll Coins controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
