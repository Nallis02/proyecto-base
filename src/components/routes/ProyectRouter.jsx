import Home from "../screens/Home";
import { Route, Routes } from 'react-router-dom'

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}
