import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxnk5q5NsSEbqbm1bqYOTjrNqajamXNew",
  authDomain: "my-proyect-base.firebaseapp.com",
  projectId: "my-proyect-base",
  storageBucket: "my-proyect-base.appspot.com",
  messagingSenderId: "968857245759",
  appId: "1:968857245759:web:e55e2fa8d6061ba46dc08a",
  measurementId: "G-HPE6LVE0JC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
