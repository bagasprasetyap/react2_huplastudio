export const createCart = cart => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const products = getState().firebase.products;
    const userId = getState().firebase.auth.uid;
    console.log(products);
    firestore
      .collection("carts")
      .add({
        ...cart,
        userId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_CART", cart });
      })
      .catch(err => {
        dispatch({ type: "CREATE_CART_ERROR", err });
      });
  };
};

export const createCheckout = checkout => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    console.log(userId);
    firestore
      .collection("checkout")
      .add({
        ...checkout,
        userId: userId,
        createdAt: new Date()
      })
      .then(resp => {
        return firestore.collection("carts");
      });
  };
};
