import React from "react";
import CartItem from "./CartItem";

class CartList extends React.Component {
  // displayCarts = () => {
  //   console.log(this.props.carts);
  // };

  showCarts() {
    return this.props.carts.map((val, i) => {
      // return <p>{val.id}</p>;
      return (
        <CartItem
          title={val.title}
          price={val.price}
          quantity={val.quantity}
          gambarURL={val.gambarURL}
          userId={val.userid}
          key={i}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.displayCarts} /> */}
        <table>
          <thead>
            <tr>
              <th>
                <i className="material-icons">photo</i>
              </th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>{this.props.carts ? this.showCarts() : ""}</tbody>
        </table>
      </div>
    );
  }
}

export default CartList;
