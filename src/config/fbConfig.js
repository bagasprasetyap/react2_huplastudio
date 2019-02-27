import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCZSVdWqPej2u8cvZworctGlaU8Q4rnxsc",
  authDomain: "backend2-huplastudio.firebaseapp.com",
  databaseURL: "https://backend2-huplastudio.firebaseio.com",
  projectId: "backend2-huplastudio",
  storageBucket: "backend2-huplastudio.appspot.com",
  messagingSenderId: "422029966039"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
