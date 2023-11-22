import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/images/logo.png";
import styles from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  async function handleLogin () {
    try {
      if (!email || !senha) {
        setError("Preencha todos os campos");
        return;
      }

      const response = await axios.post("http://localhost:5000/login", {
        email:email,
        senha:senha,
      });

      if (response.status === 200) {
        navigate("/cadprodutos");
      } else {
        throw new Error("Erro ao fazer login");
      }
    } catch (error) {
      setError("Erro ao fazer login");
      console.error("Erro ao fazer login", error);
    }
  };

  return (
    <div className={styles.divLogin}>
      <img src={logo} alt="logo da loja toca raul" />

      <section className={styles.caixaLogin}>
        <h1>Acesso administração</h1>

        <form>
          <div className={styles.divInput}>
            <label htmlFor="usuario">E-mail:</label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
          </div>

          <div className={styles.divInput}>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
          </div>

          <p>{error}</p>

          <div className={styles.divbotao}>
            <button
              className={styles.botao}
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          <Link to="/cadusuarios">Registre-se</Link>
        </form>
      </section>
    </div>
  );
};
