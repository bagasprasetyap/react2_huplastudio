import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <section className="section container">
          <div className="row">
            <form className="col s12 l6 offset-l3" onSubmit={this.handleSubmit}>
              <div className="card" style={{ padding: "30px" }}>
                <h4 className="center">Create Account</h4>

                <div className="divider" style={{ marginTop: "30px" }} />

                <div className="input-field">
                  <i className="material-icons prefix">email</i>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                  <i className="material-icons prefix">lock</i>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-field">
                  <i className="material-icons prefix">person</i>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-field">
                  <i className="material-icons prefix">person</i>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-field">
                  <i className="material-icons prefix">home</i>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-field">
                  <i className="material-icons prefix">phone_android</i>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                  <button
                    className="btn waves-effect waves-light teal"
                    style={{ width: "100%" }}
                  >
                    Create
                  </button>
                </div>

                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>

                <a href="/" className="center black-text">
                  <p>Return to Store</p>
                </a>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
