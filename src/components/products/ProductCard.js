import React from "react";
import gambar from "../../img/imageCard.jpeg";

const ProductCard = ({ product }) => {
  return (
    <div className="col s12 m6 l3">
      <div className="card product-card">
        <div className="card-image">
          <img src={gambar} alt="gambar" />
        </div>
        <div className="card-content">
          <span
            className="card-title black-text"
            style={{ fontSize: "11pt", fontWeight: "bold" }}
          >
            {product.title}
          </span>
          <p>Rp{product.price}</p>
          <h6 style={{ textAlign: "right" }}>by Hupla Studio</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
