import React, { Component } from "react";
import ProductList from "./products/ProductList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Shop extends Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div className="shop container">
        <div className="row">
          <div className="col">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(Shop);
