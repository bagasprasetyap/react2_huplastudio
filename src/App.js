import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProductDetails from "./components/products/ProductDetails";
import Shop from "./components/Shop";
import FAB from "./components/FAB";
import CreateProduct from "./components/products/CreateProduct";
import Cart from "./components/carts/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/shop/:id" component={ProductDetails} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
            <Route path="/createproduct" component={CreateProduct} />
          </Switch>
          <div
            className="fab hide-on-large-only"
            style={{ position: "fixed", right: "50px", bottom: "60px" }}
          >
            <FAB />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
