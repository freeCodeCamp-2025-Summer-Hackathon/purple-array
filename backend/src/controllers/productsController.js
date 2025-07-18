import Product from '../models/Product.js';

export async function getAllProducts(_, res) {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        console.error('Error in getAllProducts controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function createProduct(req, res) {
    try {
        const { name, cost, description, tags } = req.body;
        const product = await Product.create({ name, cost, description, tags });
        res.status(201).json({ product });
    } catch (error) {
        console.error('Error in product controller');
        res.status(500).json({ msg: error.message });
    }
}
