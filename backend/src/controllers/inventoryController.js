import User from '../models/User.js';

export async function getUserInventory(req, res) {
    try {
        const userInventory = await User.findById(req.params.id, 'inventory -_id'); //  returns inventory, removes _id
        if (!userInventory)
            return res.status(404).json({ message: 'Inventory not found' });
        res.status(200).json(userInventory);
    } catch (error) {
        console.error('Error in getUserInventory Controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
