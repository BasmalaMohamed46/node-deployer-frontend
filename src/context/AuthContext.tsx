import { createContext, ReactNode, useContext, useState } from 'react';

export type AuthContextType = {
  isLoggedIn: boolean,
  login: () => void,
  logout: () => void
}
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => '',
  logout: () => '',
});

export const useAuth = () => {
  return useContext(AuthContext);
};


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
  );
};
