import express from "express";
import { createProduct, deleteProduct, getProduct, putProduct } from "../controllers/product.controller.js";


const router = express.Router();

router.post("/", createProduct);

router.get("/", getProduct);

router.put("/:id", putProduct);

router.delete("/:id", deleteProduct);


export default router;