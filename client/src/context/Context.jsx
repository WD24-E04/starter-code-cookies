import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        isUserLoggedIn,
        setIsUserLoggedIn,
      }}
    >
      {children}
    </Context.Provider>
  );
}
