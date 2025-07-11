// controllers/productController.js
const Product = require("../models/productModel");

const fetchProducts = async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = {
  fetchProducts,
};
