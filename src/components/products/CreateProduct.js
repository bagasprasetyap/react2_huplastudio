import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../../store/actions/productActions";
import FileUploader from "react-firebase-file-uploader";
import firebase from "../../config/fbConfig";

class CreateProduct extends Component {
  state = {
    title: "",
    price: "",
    merchant: "",
    description: "",
    gambar: "",
    gambarURL: "",
    isUploading: false,
    progress: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // UPLOAD FORM
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProduct(this.state);
  };

  // UPLOAD IMAGE
  handleUploadStart = () => {
    this.setState({ isUploading: true, progress: 0 });
  };
  handleProgress = progress => {
    this.setState({ progress });
  };
  handleUploadError = err => {
    this.setState({ isUploading: false });
    console.error(err);
  };
  handleUploadSuccess = filename => {
    this.setState({ gambar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("productImages")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ gambarURL: url }));
    console.log(this.state);
  };

  render() {
    return (
      <div className="container col l6">
        <div>
          <FileUploader
            accept="image/*"
            name="gambar"
            randomizeFilename
            storageRef={firebase.storage().ref("productImages")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </div>
        {/* <div className="file-field input-field">
            <div className="btn blue">
              <span>File</span>
              <input type="file" id="gambar" onChange={this.handleChange} />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div> */}

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
