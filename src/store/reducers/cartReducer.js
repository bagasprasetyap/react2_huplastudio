const initState = {};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CART":
      console.log("created cart", action.cart);
      return state;
    case "CREATE_CART_ERROR":
      console.log("created product error", action.err);
      return state;
    default:
      return state;
  }
};

export default cartReducer;
