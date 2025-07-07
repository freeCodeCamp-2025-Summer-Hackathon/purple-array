import Product from '../models/Product.js';

export async function getAllProducts(_, res) {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json({ products });
    } catch (error) {
        console.error('Error in getAllProducts controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
