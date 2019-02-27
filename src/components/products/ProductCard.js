import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col s12 l4">
      <div className="card product-card">
        <div className="card-image">
          <img src={product.gambarURL} alt="gambar" />
        </div>
        <div className="card-content">
          <span
            className="card-title black-text"
            style={{ fontSize: "11pt", fontWeight: "bold" }}
          >
            {product.title}
          </span>
          <p>Rp{product.price}</p>
          <h6 style={{ textAlign: "right" }}>by {product.merchant}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
