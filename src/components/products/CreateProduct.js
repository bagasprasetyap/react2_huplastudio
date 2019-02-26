import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../../store/actions/productActions";

class CreateProduct extends Component {
  state = {
    title: "",
    price: "",
    merchant: "",
    description: "",
    gambarURL: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProduct(this.state);
  };

  render() {
    return (
      <div className="container col l6">
        <form onSubmit={this.handleSubmit}>
          <h5>CREATE NEW PRODUCT</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Product Title</label>
          </div>
          <div className="input-field">
            <input type="number" id="price" onChange={this.handleChange} />
            <label htmlFor="price">Product Price</label>
          </div>
          <div className="input-field">
            <textarea
              className="materialize-textarea"
              id="description"
              onChange={this.handleChange}
            />
            <label htmlFor="title">Product Description</label>
          </div>

          <div className="file-field input-field">
            <div className="btn blue">
              <span>File</span>
              <input type="file" id="gambar" onChange={this.handleChange} />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <div className="input-field">
            <input type="text" id="merchant" onChange={this.handleChange} />
            <label htmlFor="merchant">Merchant Name</label>
          </div>
          <div className="input-field">
            <button className="btn blue">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProduct: product => dispatch(createProduct(product))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProduct);
