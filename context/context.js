import React, { useState, useEffect, useContext, createContext } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const exposed = { isOpen, setIsOpen };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useProvider = () => useContext(Context);

export default Provider;
