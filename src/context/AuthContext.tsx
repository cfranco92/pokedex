import React, { ReactChild, createContext, useState } from "react";
import { User, UserDetails } from "../models/userData";

export const AuthContext = createContext({
  user: undefined,
  login: (userData: any) => {},
  logout: () => {},
});

export interface AuthProviderProps {
  children: ReactChild;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserDetails | undefined | any>(undefined);

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(undefined);
  };

  const valueContext = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
