import React from "react";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

const ButtonLogout = props => {
  return (
    <div>
      <a href="/cart" className="btn-floating  waves-effect waves-light teal">
        <i className="material-icons">shopping_cart</i>
      </a>
      <a
        href="/profile"
        className="btn-floating  waves-effect waves-light teal"
      >
        {props.profile.initials}
      </a>
      <button
        onClick={props.signOut}
        className="btn btn-small white grey-text waves-effect z-depth-0"
      >
        Logout
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ButtonLogout);
