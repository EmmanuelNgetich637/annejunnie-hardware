import React from "react";
import ProductCard from "../components/ProductCard";

// Sample dummy product data
const products = [
  {
    title: "Hammer",
    image: "https://cdn.pixabay.com/photo/2016/04/01/09/44/hammer-1306610_1280.png",
    price: 350,
  },
  {
    title: "Paint Bucket",
    image: "https://cdn.pixabay.com/photo/2016/04/01/09/44/hammer-1306610_1280.png",
    price: 1450,
  },
  {
    title: "Cement Bag",
    image:  "https://cdn.pixabay.com/photo/2015/12/09/17/12/cement-1081840_1280.jpg",
    price: 700,
  },
  {
    title: "Nails (1kg)",
    image:  "https://cdn.pixabay.com/photo/2017/08/30/07/45/nails-2692719_1280.jpg",
    price: 200,
  },
  {
    title: "Screwdriver",
    image: "https://cdn.pixabay.com/photo/2013/07/13/12/45/screwdriver-159190_1280.png",
    price: 180,
  },
  {
    title: "Measuring Tape",
    image:  "https://cdn.pixabay.com/photo/2016/03/27/19/46/measuring-tape-1281706_1280.jpg",
    price: 250,
  },
];

function Products() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Our Products</h2>
      <div className="row">
        {products.map((item, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
