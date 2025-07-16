import User from '../models/User.js';

/* Return all data for the signed in user
 */
export async function getUser(req, res) {
    try {
        const user = await User.findById(req.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        console.error('Error in getUser controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
