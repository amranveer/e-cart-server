// controllers/productController.js
import { Product } from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const image = req.file?.path;

    // Basic validation
    if (!name || !price || !category || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, price, category, image) are required",
      });
    }

    // Create and save product
    const product = new Product({
      name,
      price,
      category,
      image, // Cloudinary URL
    });

    await product.save();

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
