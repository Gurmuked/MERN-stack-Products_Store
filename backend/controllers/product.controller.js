import product from './models/product.model.js'; 
import mongoose from 'mongoose';



export const createProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new product({ name, price, image }); 

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const putProduct = async (req, res) =>{
  const {id} = req.params;
  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message: "Invalid product Id"});
  }

  try {
    const updatedProduct = await product.findByIdAndUpdate(id, product, { new: true });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error in update product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req,res) => {
  const {id} = req.params;

  try {
    await product.findByIdAndDelete(id);
    res.status(200).json({success:true, message: "product deleted" });
  } catch (error) {
    console.error("Error in delete product:", error.message);
    res.status(404).json({ success: false, message: "product not found" });
  }
};