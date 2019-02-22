import React, { Component } from "react";

class ButtonLogin extends Component {
  render() {
    return (
      <React.Fragment>
        <a href="/login" className="btn teal z-depth-0">
          <i className="material-icons">person</i>
        </a>
      </React.Fragment>
    );
  }
}
export default ButtonLogin;
