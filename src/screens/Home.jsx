import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const {saludo} = AuthContext();
  return (
    <div>{saludo.nombre}</div>
  )
}
