const express= require('express');
const router= express.Router();

const products = [
     { id: 1, name: 'Hammer', price: 350, image: 'hammer.jpg' },
     { id: 2, name: 'Screwdriver', price: 150, image: 'screwdriver.jpg' },
];

router.get('/', (req, res) =>{
    res.json(products);
});
module.exports = router;