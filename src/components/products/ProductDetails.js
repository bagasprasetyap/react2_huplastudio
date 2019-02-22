import React from "react";
import gambar from "../../img/imageCard.jpeg";

const ProductDetails = () => {
  return (
    <div className="section container product-details">
      <div className="row">
        {/* Gambar Product */}
        <div className="col s12 l6 ">
          <div className="card">
            <div className="card-image">
              <img src={gambar} alt="gambar" />
            </div>
          </div>
        </div>

        {/* Details Product */}
        <form className="col s12 l6">
          <div className="card z-depth-0">
            <h4>3D Puzzle - Rinjani</h4>
            <h6>Rp199.000</h6>
            <p style={{ textAlign: "justify" }}>
              This cozy hoodie from Bella + Canvas sports the subdued ILTMS
              logos on the left chest and the right sleeve. Make sure you stay
              warm and show people that YOU like to make stuff too! 60/40
              Cotton/Polyester blend.
            </p>
            <br />
            <div className="input-field col s2 l2 ">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label style={{ fontWeight: "bold" }}>Quantity:</label>
            </div>
            <div className="input-field">
              <button
                className="btn waves-effect waves-light teal"
                type="submit"
                style={{ width: "100%" }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Gambar Product lanjutan */}
      <div className="row">
        <div className="col l2">
          <div className="card">
            <div className="card-image">
              <img src={gambar} alt="gambar" />
            </div>
          </div>
        </div>
        <div className="col l2">
          <div className="card">
            <div className="card-image">
              <img src={gambar} alt="gambar" />
            </div>
          </div>
        </div>
        <div className="col l2">
          <div className="card">
            <div className="card-image">
              <img src={gambar} alt="gambar" />
            </div>
          </div>
        </div>

        {/* tabs description */}
        <div className="row">
          <div className="col l8 offset-l2">
            <ul className="tabs ">
              <li className="tab col ">
                <a className="active" href="#tab1">
                  Description
                </a>
              </li>
              <li className="tab col">
                <a href="#tab2">Additional Information</a>
              </li>
              <li className="tab col">
                <a href="#tab3">Reviews</a>
              </li>
            </ul>
          </div>

          <div id="tab1" className="col l8 offset-l2">
            <p style={{ textAlign: "justify" }}>
              This cozy hoodie from Bella + Canvas sports the subdued ILTMS
              logos on the left chest and the right sleeve. Make sure you stay
              warm and show people that YOU like to make stuff too! 60/40
              Cotton/Polyester blend.
            </p>
          </div>
          <div id="tab2" className="col l8 offset-l2">
            <h6>Rp199.000</h6>
          </div>
          <div id="tab3" className="col l8 offset-l2">
            <p>Review: bagus sekali</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
