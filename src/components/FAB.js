import React, { Component } from "react";
import {
  FloatingMenu,
  MainButton,
  ChildButton
} from "react-floating-button-menu";

class FAB extends Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <FloatingMenu
        slideSpeed={500}
        direction="up"
        spacing={8}
        isOpen={this.state.isOpen}
      >
        <MainButton
          iconResting={<i className="material-icons white-text">menu</i>}
          iconActive={<i className="material-icons white-text">notes</i>}
          backgroundColor="black"
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          size={56}
        />
        <ChildButton
          icon={<i className="material-icons">work</i>}
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={<i className="material-icons">shopping_basket</i>}
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={<i className="material-icons">money</i>}
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={<i className="material-icons">domain</i>}
          backgroundColor="white"
          size={40}
        />
      </FloatingMenu>
    );
  }
}
export default FAB;
