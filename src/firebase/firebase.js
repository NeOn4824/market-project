import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const configFirebase = {
  apiKey: "AIzaSyBbffVrl-ucEm3fBQ1l8dhEmY8CPCygwRU",
  authDomain: "marketappdb-54c0f.firebaseapp.com",
  databaseURL: "https://marketappdb-54c0f.firebaseio.com",
  projectId: "marketappdb-54c0f",
  storageBucket: "marketappdb-54c0f.appspot.com",
  messagingSenderId: "936381988329",
  appId: "1:936381988329:web:193338fba065dfd595df78",
  measurementId: "G-ZTZZQ6WVV2",
};

firebase.initializeApp(configFirebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
