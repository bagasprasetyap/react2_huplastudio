import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="product-list section">
      <div className="row">
        {products &&
          products.map(product => {
            return (
              <a href={"/shop/" + product.id} key={product.id}>
                <ProductCard product={product} />
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
