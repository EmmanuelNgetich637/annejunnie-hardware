// scripts/seedProducts.js
const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany();
  await Product.insertMany([
    {
      name: "Hammer",
      image: "/images/download4.jpeg",
      price: 350,
    },
    {
      name: "Paint Bucket",
      image: "/images/download5.jpeg",
      price: 1450,
    },
    {
      name: "Cement Bag",
      image: "/images/download3.jpeg",
      price: 700,
    },
    {
      name: "Nails (1kg)",
      image: "/images/download2.jpeg",
      price: 200,
    },
    {
      name: "Screwdriver",
      image: "/images/download1.jpeg",
      price: 180,
    },
    {
      name: "Measuring Tape",
      image: "/images/download.jpeg",
      price: 250,
    },
  ]);
  console.log('✅ Seeded products!');
  process.exit();
});
