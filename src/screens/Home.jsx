import { AuthContext } from "../context/AuthContext";
import {  productsCol, setData,  deleteDocument, inventarioCol, docSnap } from "../utils/database";

export default function Home() {
  const { saludo } = AuthContext();
  const data = { id: "2", data: "PC" };
  const onClick = () => setData(productsCol, data);
  
  const data1 = {  id: "knlLnnn2GUB8rme6lC1h"};
  const remove = () => deleteDocument(inventarioCol, data1);
  // const buscarId = {  id: "xyNPIxSlAVUxPCogFKW2"};
  // const buscarPorId = () => buscaerXId(inventarioCol, buscarId)
  const buscarPorId = ()=> {
    if (docSnap.exists()) {
      console.log(docSnap.data());
    } else {
      console.log("no existe");
    }
  }

  // const buscarSnap = () => buscarSnapshot(usersCol)

  return (
    <section>
      <div>{saludo.nombre}</div>
      <button onClick={onClick}>Añadir Usuario</button>
      <button onClick={remove}>Eliminar</button>
      <button onClick={buscarPorId}>Buscar Por Id</button>
      {/* <button onClick={buscarSnap}>Buscar coleccion Snapshot</button> */}
      
    </section>
  );
}
