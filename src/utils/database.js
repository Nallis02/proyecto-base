import { setDoc } from "firebase/firestore";
import { usersDoc } from "../services/firebase";

export function addUser(name) {
    //cedulas, correos y celular para los id, no se repiten
    try {
        setDoc(usersDoc(name), {name})
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

