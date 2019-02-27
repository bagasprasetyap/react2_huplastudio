const initState = {};

const checkoutReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CHECKOUT":
      console.log("created checkout", action.checkout);
      return state;
    case "CREATE_CHECKOUT_ERROR":
      console.log("created checkout error", action.err);
      return state;
    default:
      return state;
  }
};

export default checkoutReducer;
