import React from "react";

function ProductCard({ title, image, price }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title}  style={{ height: "200px", objectFit: "cover" }}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Ksh {price}</p>
        <button className="btn btn-sm btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
