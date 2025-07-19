import mongoose from 'mongoose';
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

export async function putProduct(req, res) {
    try {
        const user = await User.findById(req.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const productId = req.params.product_id;

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(400).json({ message: 'Item does not exist' });
        }

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

        await user.save();

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
