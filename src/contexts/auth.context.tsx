import { createContext, useEffect, useState } from "react";

import { User } from "../entities/user.entity";
import { authServiceMock } from "../services/auth.service.mock";

interface IAuthContext {
  user?: User;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface IAuthContextProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider({ children }: IAuthContextProvider) {
  const [user, setUser] = useState<User>();

  async function login(email: string, password: string) {
    const _user = authServiceMock(email, password);

    if (!_user) throw new Error("Usuário inválido.");

    setUser({ name: _user.name, avatar_url: _user.avatar_url });
    localStorage.setItem(
      "@user",
      JSON.stringify({ name: _user.name, avatar_url: _user.avatar_url })
    );
  }

  function logout() {
    setUser(undefined);
    localStorage.removeItem("@user");
  }

  useEffect(() => {
    const storage = localStorage.getItem("@user");

    if (!storage) return logout();

    setUser(JSON.parse(storage));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
