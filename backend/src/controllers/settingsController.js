import User from '../models/User.js';
import { checkInventory, checkTimezone } from '../utils/inventoryHelper.js';

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

export async function patchSettings(req, res) {
    try {
        const user = await User.findById(req.id, 'settings inventory -_id'); // returns only settings and inventory field, removes _id
        const { timezone, theme, font, ink, parchment } = req.body;
        const setting = { theme, font, ink, parchment };

        const _updatedTimezone = await checkTimezone(timezone);
        const updatedSettings = await checkInventory(setting, user.inventory);

        if (!updatedSettings)
            return res.status(400).json({ message: 'Settings not found' });
        else {
            const updatedUser = await User.findByIdAndUpdate(
                req.id,
                {
                    settings: updatedSettings,
                },
                { new: true }
            );

            return res.status(200).json(updatedUser.settings);
        }
    } catch (error) {
        console.error('Error in patchSettings controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
