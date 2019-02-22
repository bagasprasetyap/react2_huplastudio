import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProductList from "./components/products/ProductList";
import ProductDetails from "./components/products/ProductDetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/shop" component={ProductList} />
          <Route path="/about" component={ProductDetails} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
