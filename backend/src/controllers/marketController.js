import Market from '../models/Market.js';

export async function getAllMarkets(_, res) {
    try {
        const markets = await Market.find().sort({ createdAt: -1 });
        res.status(200).json(markets);
    } catch (error) {
        console.error('Error in getAllMarkets controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
