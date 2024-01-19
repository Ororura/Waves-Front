import { createContext, useState } from "react";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (name) => {};
  const values = {};
  return <Context.Provider value={values}></Context.Provider>;
};
