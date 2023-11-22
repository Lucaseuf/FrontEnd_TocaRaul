import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const signin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const { token } = response.data;
      setUser({ email, token });
    } catch (error) {
      return error.message || "Erro ao efetuar login";
    }
  };

  const signup = async (email, password) => {
    try {
      await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });


    } catch (error) {
      return error.message || "Erro ao cadastrar usuário";
    }
  };

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
