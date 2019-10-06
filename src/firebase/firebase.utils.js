import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAVeWcWc2ji8pRZXBlME2ruTmM2Z5_fuy0",
  authDomain: "crown-clothing-4a4e0.firebaseapp.com",
  databaseURL: "https://crown-clothing-4a4e0.firebaseio.com",
  projectId: "crown-clothing-4a4e0",
  storageBucket: "",
  messagingSenderId: "752656728986",
  appId: "1:752656728986:web:6de676afb42a1bbe2df023",
  measurementId: "G-2RF70CD3GF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
