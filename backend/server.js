import express from 'express';

import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import productRoutes from './routes/product.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON and urlencoded form data so `req.body` is populated
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})