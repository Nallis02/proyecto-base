import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";

export default function MainRouter() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
