import React, { useState, useEffect, useContext, createContext } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const exposed = { isOpen, setIsOpen, theme, setTheme };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useProvider = () => useContext(Context);

export default Provider;
