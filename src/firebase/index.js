import firebase from 'firebase/app';
import 'firebase/firestore'; // for the db
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC-lX5QzHGim00ODVVSuFRJ2hKtwx8-EZw",
  authDomain: "ave-nouvelle-store.firebaseapp.com",
  projectId: "ave-nouvelle-store",
  storageBucket: "ave-nouvelle-store.appspot.com",
  messagingSenderId: "587009279667",
  appId: "1:587009279667:web:2149e6316c07c0e08912c6",
  // measurementId: "G-SW8QNC7GMQ"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return };

  const userRef = firestore.doc(`users/${userAuth.uid}`) //users/uniq26535
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export {
  firestore,
  createUserProfileDocument,
  auth,
}