import React, { createContext, useCallback, useState, useContext } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials extends User {}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Gowww:token');
    const user = localStorage.getItem('@Gowww:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ name, email }) => {
    const token = `${Math.random()}`;
    const user = { name, email };

    localStorage.setItem('@Gowww:token', token);
    localStorage.setItem('@Gowww:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Gowww:token');
    localStorage.removeItem('@Gowww:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
