import React from "react";

function ProductCard({ product, addToCart }) {
  const { name, image, price } = product;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}  
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ksh {price}</p>
        <button
          onClick={() => addToCart(product)}
          className="btn btn-success"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
