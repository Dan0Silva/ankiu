import React, { createContext, useEffect, useState } from 'react';
import { User } from '../../../data/types/user';
import { toast } from 'react-toastify';

type UserContextType = {
  user: User | null;
  token: string | null;

  registerUser: (name: string, email: string, password: string) => void;
  loginUser: (user: User) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

interface ContextProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: ContextProps) => {
  // const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

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

  const loginUser = (user: User) => {
    toast('teste de login');
  };

  const logout = () => {};

  const isLoggedIn = () => {
    return true;
  };

  return (
    <UserContext.Provider
      value={{ user, token, registerUser, loginUser, logout, isLoggedIn }}
    >
      {isReady ? (
        children
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </UserContext.Provider>
  );
};

export const useAuthContext = () => {
  return React.useContext(UserContext);
};
