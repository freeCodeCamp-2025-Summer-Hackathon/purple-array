import Product from '../models/Product.js';
import User from '../models/User.js';

export async function getAllProducts(_, res) {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        console.error('Error in getAllProducts controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function putProduct(req, res) {
    try {
        const user = await User.findById(req.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const product = await Product.findById(req.params.product_id);
        if (!product)
            return res.status(400).json({ message: 'Item does not exist' });

        if (user.coins < product.cost) {
            return res.status(400).json({ message: 'Not enough coins' });
        }

        user.coins -= product.cost;

        for (const tag of product.tags) {
            if (!user.inventory[tag]) {
                user.inventory[tag] = [];
            }

            if (!user.inventory[tag].includes(product.name)) {
                user.inventory[tag].push(product.name);
                user.inventory[tag].sort();
            }
        }

        return res.status(200).json({
            message: 'Purchase successful',
            coins: user.coins,
            inventory: user.inventory,
        });
    } catch (error) {
        console.error('Error in getAllProducts controller', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
