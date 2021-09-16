import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
  });

  const nameLabel = 'Digite seu nome aqui: ';

  return (
    <AuthContext.Provider value={{ user, setUser, nameLabel }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
