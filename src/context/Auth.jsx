import React, { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

const DEFAULT_KEY = "challenge-fiap";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const key = sessionStorage.getItem("access_key");

    if (key) {
      setIsAuth(DEFAULT_KEY === key);
    }
  }, []);

  const handleAuth = (key) => {
    if (key === DEFAULT_KEY) {
      sessionStorage.setItem("access_key", key);
      setIsAuth(true);
      return true;
    }

    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
