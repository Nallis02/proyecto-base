import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  doc, getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxnk5q5NsSEbqbm1bqYOTjrNqajamXNew",
  authDomain: "my-proyect-base.firebaseapp.com",
  projectId: "my-proyect-base",
  storageBucket: "my-proyect-base.appspot.com",
  messagingSenderId: "968857245759",
  appId: "1:968857245759:web:e55e2fa8d6061ba46dc08a",
  measurementId: "G-HPE6LVE0JC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// creando la referencia a un documento 
// 1 base de datos firebase
// 2 tabla = nombre coleccion 
// 3 id del documento 
export const usersDoc = (id) => doc(db, "users", id); 

// Initialize Firebase
const analytics = getAnalytics(app);


