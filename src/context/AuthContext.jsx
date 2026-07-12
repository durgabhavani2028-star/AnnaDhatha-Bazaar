import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setAdmin({ username });
      return true;
    }
    return false;
  };

  const logout = () => setAdmin(null);

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
