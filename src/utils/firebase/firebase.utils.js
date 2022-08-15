import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX2jJufClvJ0GZxi9iG2zE2ZjKVJ7ci0E",
  authDomain: "clothing-shop-92fdc.firebaseapp.com",
  projectId: "clothing-shop-92fdc",
  storageBucket: "clothing-shop-92fdc.appspot.com",
  messagingSenderId: "608175296886",
  appId: "1:608175296886:web:871b32718fcf6164e4aa57",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
