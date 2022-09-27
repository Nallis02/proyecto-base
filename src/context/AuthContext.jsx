import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [saludo, setSaludo] = useState({nombre:"Hello world! Nallis"});

  const value = {
    saludo,
    setSaludo,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const AuthContext = () => useContext(Context);
