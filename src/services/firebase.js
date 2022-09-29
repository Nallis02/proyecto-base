import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKiEV4jKIGhUsJBZPeB2dZ9GJcEmCMgrk",
  authDomain: "proyecto-base-f7bb6.firebaseapp.com",
  projectId: "proyecto-base-f7bb6",
  storageBucket: "proyecto-base-f7bb6.appspot.com",
  messagingSenderId: "668003363864",
  appId: "1:668003363864:web:16457646322ed36490676d",
  measurementId: "G-NVDPTF525J",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Firebase
const analytics = getAnalytics(app);
