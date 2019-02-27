import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { createCart } from "../../store/actions/cartActions";

class ProductDetails extends Component {
  state = {
    quantity: 1,
    title: "",
    price: "",
    gambarURL: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.product !== this.props.product) {
      this.setState({
        title: nextProps.product.title,
        price: nextProps.product.price,
        gambarURL: nextProps.product.gambarURL
      });
    }
  }

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

  // Submit Cart
  handleSubmit = e => {
    e.preventDefault();

    this.props.createCart(this.state);
    console.log(this.state);
  };

  render() {
    const { product } = this.props;
    // console.log(product);
    console.log(this.props);
    console.log(this.state);
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
                <img src={product.gambarURL} alt="gambar" />
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={product.gambarURL} alt="gambar" />
              </div>
            </div>
          </div>

          {/* Gambar Product */}
          <div className="col s12 l6 ">
            <div className="card">
              <div className="card-image">
                <img src={product.gambarURL} alt="gambar" />
              </div>
            </div>
          </div>

          {/* Details Product */}
          <form className="col s12 l5" onSubmit={this.handleSubmit}>
            <div className="card z-depth-0">
              <h4>{product.title}</h4>
              <h6>Rp{product.price}</h6>
              <p style={{ textAlign: "justify" }}>{product.description}</p>
              <br />

              {/* select quantity item */}
              <div className="jumlah input-field">
                <p className="grey-text">Quantity:</p>
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

              {/* add to cart button */}
              <div className="input-field">
                <button
                  className="btn waves-effect waves-light teal"
                  type="submit"
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
  console.log(state);
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  return {
    product: product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCart: cart => dispatch(createCart(cart))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "products" }])
)(ProductDetails);
