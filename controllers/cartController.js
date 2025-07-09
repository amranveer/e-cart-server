import Cart from "../models/Cart.js";

// @desc    Get current user's cart
// @route   GET /api/cart
// @access  Private
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.userId }).populate("items.product");

    if (!cart) {
      return res.status(200).json({ items: [] });
    }

    const items = cart.items.map((item) => ({
      product: {
        _id: item.product._id,
        name: item.product.name,
        price: item.product.price,
        image: item.product.image,
      },
      quantity: item.quantity,
    }));

    res.status(200).json({ items });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Server error fetching cart" });
  }
};

// @desc    Save/update user's cart
// @route   POST /api/cart
// @access  Private
export const updateCart = async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ message: "Invalid cart data" });
    }

    let cart = await Cart.findOne({ user: req.userId });
    if (!cart) {
      cart = new Cart({ user: req.userId });
    }

    cart.items = items.map(({ product, quantity }) => ({
      product,
      quantity,
    }));

    console.log("Saving cart for user:", req.userId, "Items:", cart.items);
    await cart.save();
    res.status(200).json({ message: "Cart saved" });
  } catch (error) {
    console.error("Error saving cart:", error);
    res.status(500).json({ message: "Server error saving cart" });
  }
};

// ✅ NEW: Clear user's cart
// @desc    Clear current user's cart
// @route   DELETE /api/cart
// @access  Private
export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = []; // clear items array
    await cart.save();

    res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ message: "Server error clearing cart" });
  }
};
