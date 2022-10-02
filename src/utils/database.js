import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";

// objects Collection
export const usersCol = collection(db, "users");
export const productsCol = collection(db, "productos");

// setter function
export const setData = (col, data) =>
  setDoc(doc(col, data.id), data, { merge: true });
