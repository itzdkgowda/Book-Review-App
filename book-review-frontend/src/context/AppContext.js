import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // auth’d user
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <AppContext.Provider value={{ user, setUser, loading, setLoading, error, setError }}>
      {children}
    </AppContext.Provider>
  );
};
