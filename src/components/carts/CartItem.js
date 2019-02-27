import React from "react";

class CartItem extends React.Component {
  render() {
    console.log(this.props);
    const userId = this.props.userId;
    return (
      <React.Fragment>
        <tr>
          <td>
            <img
              src={this.props.gambarURL}
              alt="cart"
              style={{ width: "40px", height: "40px" }}
            />
          </td>
          <td>{this.props.title}</td>
          <td>{this.props.price}</td>
          <td>{this.props.quantity}</td>
          <td>{this.props.price * this.props.quantity}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default CartItem;
