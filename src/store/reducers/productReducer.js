const initState = {
  products: [
    { id: "1", title: "3D Puzzle Bromo", price: "180.000" },
    { id: "2", title: "3D Puzzle Puncak Jaya", price: "185.000" },
    { id: "3", title: "3D Puzzle Rinjani", price: "220.000" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      console.log("created product", action.product);
      return state;
    case "CREATE_PRODUCT_ERROR":
      console.log("created product error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
