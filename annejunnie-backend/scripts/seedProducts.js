const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany();  
  await Product.insertMany([
    { name: 'Hammer', price: 350, image: 'hammer.jpg' },
    { name: 'Screwdriver', price: 150, image: 'screwdriver.jpg' }
  ]);
  console.log('✅ Seeded products!');
  process.exit(); 
});
