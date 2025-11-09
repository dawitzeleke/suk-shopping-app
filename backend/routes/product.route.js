import express from 'express';
import { getAllProducts, featuredProducts } from '../controllers/product.controller.js';
import { protectRoute, adminRoute } from '../middleware/auth.middleware.js';

const router = express.Router();


router.get('/', protectRoute, adminRoute, getAllProducts);
router.get('/featured', featuredProducts);
router.post('/', protectRoute, adminRoute, createProduct);

export default router;
