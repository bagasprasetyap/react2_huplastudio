import React, { Component } from "react";
import hslogo from "../img/hs_logo.png";
import ButtonLogin from "./ButtonLogin";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar-fixed">
          <nav className="nav-wrapper white">
            <div className="container">
              <a href="/" className="brand-logo">
                <img
                  src={hslogo}
                  alt="logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    position: "relative",
                    marginTop: "6px",
                    borderRadius: "50%"
                  }}
                />
              </a>
              <a
                href="/"
                className="sidenav-trigger"
                data-target="mobile-links"
              >
                <i className="material-icons black-text">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/projects" className="black-text">
                    PROJECTS
                  </a>
                </li>
                <li>
                  <a href="/shop" className="black-text">
                    SHOP
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="black-text">
                    PRICING
                  </a>
                </li>
                <li>
                  <a href="/about" className="black-text">
                    ABOUT
                  </a>
                </li>
                <li>
                  <ButtonLogin />
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ul className="sidenav" id="mobile-links">
          <li>
            <a href="/projects" className="black-text">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="/shop" className="black-text">
              SHOP
            </a>
          </li>
          <li>
            <a href="/pricing" className="black-text">
              PRICING
            </a>
          </li>
          <li>
            <a href="/pricing" className="black-text">
              ABOUT
            </a>
          </li>
          <li>
            <ButtonLogin />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
