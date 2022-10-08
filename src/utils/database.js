// import { query } from "express";
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, setDoc, query, where,orderBy, limit } from "firebase/firestore";
import { db } from "../services/firebase";

// objects Collection
export const usersCol = collection(db, "users");
export const productsCol = collection(db, "productos");
export const inventarioCol = collection(db, "inventario");

// setter function
export const setData = (col, data) =>
  setDoc(doc(col, data.id), data, { merge: true });
//funcion para agregar coleccion sin id especifico
export const setDocument = (col, data) => addDoc(col, { data });

export const deleteDocument = (col, data) => deleteDoc(doc(col, data.id),data);

// export const buscaerXId = (col, data)=> getDoc(doc(col, data.id),data);
const docRef = doc(inventarioCol, "xyNPIxSlAVUxPCogFKW2");
export const docSnap = await getDoc(docRef);

// - Leer (todos) documentos por colección con get

//Peticion asincrona axios
// - Leer (todos) documentos por colección con snapshot
// export const buscarSnapshot = (col) => {
//   onSnapshot(doc(col))
// };

export const buscarSnapshot = onSnapshot(doc(usersCol, '2'), (doc) => {
  console.log("Current data: ", doc.data());
});
// - Leer (filtrar x campo) documentos por colección con query y get
// const q = query(usersCol, where("name", "==", 'camila'), orderBy("name"));

// - Leer (filtrar x campo) documentos por colección con query y snapshot

// - Investigar datos que se pueden recolectar al manejar bases de datos


