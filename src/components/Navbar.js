import React from "react";
import hslogo from "../img/hs_logo.png";
import ButtonLogin from "./ButtonLogin";
import ButtonLogout from "./ButtonLogout";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  // console.log(auth);

  const links = auth.uid ? <ButtonLogout profile={profile} /> : <ButtonLogin />;

  return (
    <div>
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
                  marginTop: "6px",
                  borderRadius: "50%"
                }}
              />
            </a>

            {/* navbar link */}
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
              <li className="center">{links}</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
