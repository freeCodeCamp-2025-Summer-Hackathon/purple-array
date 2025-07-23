import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: [true, 'Item name has been used'],
        },
        cost: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: [
            {
                type: String,
                required: true,
            },
        ],
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
