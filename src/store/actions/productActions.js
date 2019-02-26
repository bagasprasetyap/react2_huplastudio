export const createProduct = product => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const merchantId = getState().firebase.auth.uid;
    firestore
      .collection("products")
      .add({
        ...product,
        merchantAdmin: profile.firstName,
        merchantId: merchantId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PRODUCT", product });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PRODUCT_ERROR", err });
      });
  };
};
