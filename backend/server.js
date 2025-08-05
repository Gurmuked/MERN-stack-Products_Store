import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import product from './models/product.model.js'; 

dotenv.config();
const app = express();
app.use(express.json());

app.post('/api/products', async (req, res) => {
  const product = req.body;

  if(!product.name || !product.price || !product.image){
    return res.status(400).json({success : false, message: "please provide all fields"})
  }

  const newproduct = new product(product);

  try{
    await newproduct.save();
    res.status(201).json({success: true, data: newproduct});
  }catch(error){
    console.log("Error in create product :", error.message);
    res.status(500).json({success: false, message: "server Error"})
  }

});

app.listen(5000, () => {
  connectDB();
  console.log("server is started at http://localhost:5000");
});