import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';

dotenv.config();
const app = express();

app.post('/products', async (req, res) => {
  res.send("server is ready12");
});

app.listen(5000, () => {
  connectDB();
  console.log("server is started at http://localhost:5000");
});