import redis from '../lib/redis.js';
import Product from '../models/product.model.js';


export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({products});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const featuredProducts = async (req, res) => {
    try {
        let featuredProducts = await redis.get("featured_products");
        if (featuredProducts) {
            return res.json( JSON.parse(featuredProducts) );
        }

        featuredProducts = await Product.find({ isFeatured: true }).lean();
        if (!featuredProducts) {
            return res.status(404).json({ message: "No featured products found" });
        } 
        await redis.set("featured_products", JSON.stringify(featuredProducts));

        res.json( featuredProducts );
    } catch (error) {
        console.error("Error fetching featured products:", error);
        res.status(500).json({ message: error.message });
    }
}