import React from "react";
import gambar from "../../img/imageCard.jpeg";

const ProductCard = () => {
  return (
    <div className="col s12 m6 l3">
      <div className="card product-card">
        <div className="card-image">
          <img src={gambar} alt="gambar" />

          <a
            href="fab"
            className="btn-floating halfway-fab waves-effect waves-light teal"
          >
            <i className="material-icons">shopping_basket</i>
          </a>
        </div>
        <div className="card-content">
          <span
            className="card-title black-text"
            style={{ fontSize: "14pt", fontWeight: "bold" }}
          >
            3D Puzzle - Rinjani
          </span>
          <p>Rp199.000</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
