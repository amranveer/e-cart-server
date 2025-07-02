// routes/productRoutes.js
import express from "express";
import upload from "../middleware/cloudinaryUpload.js";
import { createProduct } from "../controllers/productController.js";
import { Product } from "../models/Product.js";
const router = express.Router();

// POST /api/products — with image upload
router.post("/", upload.single("image"), createProduct);
// routes/productRoutes.js
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});


export default router;
