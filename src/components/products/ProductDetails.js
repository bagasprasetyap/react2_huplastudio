import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import gambar from "../../img/imageCard.jpeg";

class ProductDetails extends Component {
  state = {
    quantity: 1
  };

  tambahItem = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  kurangItem = () => {
    if (this.state.quantity <= 1) {
      this.setState({
        quantity: 1
      });
    } else {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  render() {
    const { product } = this.props;
    console.log(product);
    if (!product)
      return (
        <div className="container center">
          <h4>still loading!</h4>
        </div>
      );
    return (
      <div className="section container product-details">
        <div className="row">
          {/* Gambar Product lanjutan */}
          <div className="col l1">
            <div className="card">
              <div className="card-image">
                <img src={gambar} alt="gambar" />
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={gambar} alt="gambar" />
              </div>
            </div>
          </div>

          {/* Gambar Product */}
          <div className="col s12 l6 ">
            <div className="card">
              <div className="card-image">
                <img src={gambar} alt="gambar" />
              </div>
            </div>
          </div>

          {/* Details Product */}
          <form className="col s12 l5">
            <div className="card z-depth-0">
              <h4>{product.title}</h4>
              <h6>Rp{product.price}</h6>
              <p style={{ textAlign: "justify" }}>{product.description}</p>
              <br />

              {/* select quantity item */}
              <div className="jumlah">
                <div onClick={this.kurangItem} className="btn-floating">
                  <i className="material-icons">remove</i>
                </div>
                <button
                  className="btn-flat disabled"
                  style={{ fontSize: "18pt" }}
                >
                  {this.state.quantity}
                </button>
                <div onClick={this.tambahItem} className="btn-floating">
                  <i className="material-icons">add</i>
                </div>
              </div>

              <div className="input-field">
                <button
                  className="btn waves-effect waves-light teal"
                  type="submit"
                  style={{ width: "40%" }}
                >
                  Add To Cart
                </button>
              </div>
              <h6>Design By Hupla Studio</h6>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  return {
    product: product
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(ProductDetails);
