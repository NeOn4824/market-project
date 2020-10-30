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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
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
