import express from "express";
import { verifyToken } from "../middleware/verifyToken.js"
import { getCart, updateCart, clearCart } from "../controllers/cartController.js";

const router = express.Router();

router.get("/", verifyToken, getCart);
router.post("/", verifyToken, updateCart);
router.delete("/", verifyToken, clearCart);

export default router;
