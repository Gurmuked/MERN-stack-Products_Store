import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import productRoutes from  './routes/product.route.js';


dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server is started at http://localhost:" + PORT);
});