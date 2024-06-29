import { createContext, ReactNode, useContext, useState } from 'react';

export type AuthContextType = {
  isLoggedIn: boolean;
  login: (provider: string, accesssToken: string) => void;
  logout: () => void;
};
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

  const login = (provider: string, accesssToken: string) => {
    localStorage.setItem('provider', provider);
    localStorage.setItem('accessToken', accesssToken);
    setIsLoggedIn(true);
  };
  const logout = () => {
    localStorage.removeItem('provider');
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
  );
};
