import express from 'express';
import { getAllProducts, featuredProducts, createProduct, deleteProduct, getRecommendedProducts, getProductsByCategory, toggleFeaturedProduct } from '../controllers/product.controller.js';
import { protectRoute, adminRoute } from '../middleware/auth.middleware.js';

const router = express.Router();


router.get('/', protectRoute, adminRoute, getAllProducts);
router.get('/featured', featuredProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/recommendations', getRecommendedProducts);
router.post('/', protectRoute, adminRoute, createProduct);
router.delete('/:id', protectRoute, adminRoute, deleteProduct);
router.patch('/:id', protectRoute, adminRoute, toggleFeaturedProduct);

export default router;
