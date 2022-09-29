import { useState, createContext, useContext } from "react";
const Context = createContext();

export default function MyContextProvider ({ children }) {
  const [product, setProduct] = useState({name:'bici', 
  desc:'bicicleta todo terreno, con 7 cambios manuales, en perfecto estado', 
  image: 'https://cdn.pixabay.com/photo/2022/07/02/17/24/abstract-7297671__480.jpg'});

  const value = {
    product,
    setProduct,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const MyContext =()=> useContext(Context);

