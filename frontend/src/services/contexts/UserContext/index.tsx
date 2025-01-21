import React, { createContext, useEffect, useState } from 'react';
import { User } from '../../../data/types/user';
import { useNavigate } from 'react-router-dom';

type UserContextType = {
  user: User | null;
  token: string | null;

  registerUser: (name: string, email: string, password: string) => void;
  loginUser: (user: User) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false); // serve para verificar se um usuário está pronto (logado) ou nao

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
    }

    setIsReady(true);
  }, []);

  const registerUser = (name: string, email: string, password: string) => {};

  const loginUser = (user: User) => {};

  const logout = () => {};

  const isLoggedIn = () => {
    return true;
  };

  return (
    <UserContext.Provider
      value={{ user, token, registerUser, loginUser, logout, isLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
