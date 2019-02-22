import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
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
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <section className="section container" id="loginForm">
          <div className="row">
            <form className="col s12 l6 offset-l3" onSubmit={this.handleSubmit}>
              <div className="card" style={{ padding: "30px" }}>
                <h4 className="center">Login</h4>

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
                  <button
                    className="btn waves-effect waves-light teal "
                    type="submit"
                    id="loginButton"
                    style={{ width: "100%" }}
                  >
                    Sign In
                  </button>
                </div>

                <a href="/recover" className="center black-text">
                  <p>Forgot your password?</p>
                </a>

                <div
                  className="divider"
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                />

                <Link to="/register">
                  <button
                    className="btn waves-effect waves-light teal"
                    type="submit"
                    href="/register"
                    style={{ width: "100%" }}
                  >
                    Create Account
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login;
