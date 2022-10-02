import { AuthContext } from '../context/AuthContext';
import { addUser } from '../utils/database';


export default function Home() {
  const {saludo} = AuthContext();
  return (
    <>
    <div>{saludo.nombre}</div>
    <div>
      <button onClick={()=>addUser('Matias')}>Añadir Usuario</button>
    </div>
    </>
  )
}
