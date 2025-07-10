import React from "react";
import ProductCard from "../components/ProductCard";

// Sample dummy product data
const products = [
  {
    title: "Hammer",
    image: "/images/download (4).jpeg",
    price: 350,
  },
  {
    title: "Paint Bucket",
    image: "/images/download (5).jpeg",
    price: 1450,
  },
  {
    title: "Cement Bag",
    image:  "/images/download (3).jpeg",
    price: 700,
  },
  {
    title: "Nails (1kg)",
    image:  "/images/download (2).jpeg",
    price: 200,
  },
  {
    title: "Screwdriver",
    image: "/images/download (1).jpeg",
    price: 180,
  },
  {
    title: "Measuring Tape",
    image:  "/images/download.jpeg",
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
