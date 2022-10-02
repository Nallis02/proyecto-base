import { AuthContext } from "../context/AuthContext";
import { setData, usersCol } from "../utils/database";

export default function Home() {
  const { saludo } = AuthContext();
  const data = { id: "Camila3", data: "Camila5" };
  const onClick = () => setData(usersCol, data);
  return (
    <section>
      <div>{saludo.nombre}</div>
      <button onClick={onClick}>Añadir Usuario</button>
    </section>
  );
}
