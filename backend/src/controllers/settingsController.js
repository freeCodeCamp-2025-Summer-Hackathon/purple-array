import User from '../models/User.js';

export async function getAllSettings(req, res) {
    try {
        const settings = await User.findById(req.id, 'settings -_id'); // returns only settings field, removes _id
        if (!settings)
            return res.status(404).json({ message: 'Settings not found' });
        res.status(200).json(settings);
    } catch (error) {
        console.error('Error in getAllSettings controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
