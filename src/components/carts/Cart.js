import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

class Cart extends Component {
  render() {
    const { carts } = this.props;
    // console.log(carts);
    return (
      <div className="container">
        <h4 className="center">Your Cart</h4>
        <div className="row">
          <div className="col s12 l9">
            <div className="card">
              <CartList carts={carts} />
            </div>
          </div>
          <div className="col s12 l3">
            <div className="card">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    carts: state.firestore.ordered.carts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "carts" }])
)(Cart);
