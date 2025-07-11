const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @route GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Failed to fetch products:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
