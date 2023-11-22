import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./cadUsuarios.module.scss";

export const CadUsuarios = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [listausuario] = useState([]);
  const navigate = useNavigate();

  async function handleSignup () {

    try {
        if (!email || !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const usuarioExistente = listausuario.find(
            (usuarios) => usuarios.email === email
        );

        if (usuarioExistente) {
            setError("Já existe um usuário cadastrado com esse e-mail!");
        } else {
            let body = {
                email: email,
                senha: senha
            }

            let r = await axios.post('http://localhost:5000/signup', body);
            let id = r.data.id;

            alert('Produto cadastrado. Id ' + id);

        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
    } catch (error) {
        console.error("Erro ao cadastrar usuário", error.response);
        setError("Erro ao cadastrar usuário");
    }
  };

  return (
    <div className={styles.divLogin}>
      <img src={logo} alt="logo da loja toca raul" />

      <section className={styles.caixaLogin}>
        <h1>Cadastro Usuario</h1>

        <form onSubmit={handleSignup}>
          <div className={styles.divInput}>
            <label htmlFor="usuario">E-mail:</label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.divInput}>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <p>{error}</p>

          <div className={styles.divbotao}>
            <button className={styles.botao} type="submit">
              Cadastrar
            </button>
          </div>

          <Link to="/login">Entre</Link>
        </form>
      </section>
    </div>
  );
};
