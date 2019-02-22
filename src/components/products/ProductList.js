import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="section container">
      <div className="row">
        <Link to="/shop/123">
          <ProductCard />
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
