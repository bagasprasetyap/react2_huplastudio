import authReducer from "./authReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
