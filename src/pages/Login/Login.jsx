// CSS
import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [idUser, setIdUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [error, SetErro] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = (e) => {
    const { checked } = e.target;
    setShowPassword(checked ? "text" : "password");
  };

  const handleSubmit = (e) => {
    SetErro("");
    e.preventDefault();

    if (idUser === "uninassau" && passwordUser === "uninassau") {
      navigate(`/responses`);
    } else {
      SetErro("Id ou Senha errado");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className={styles.formLogin}>
        <h1>Login</h1>
        <input className={styles.dadosLogin} type="text" placeholder="Id do Usuário" onChange={(e) => setIdUser(e.target.value)} />
        <input className={styles.dadosLogin} type={showPassword} placeholder="Senha do Usuário" onChange={(e) => setPasswordUser(e.target.value)} />
        <label>
          <input className={styles.checkbox} type="checkbox" onChange={handleShowPassword} name="MostrarSenha" />
          Mostrar Senha
        </label>
        {error && <p className="error">{error}</p>}
        <input className={styles.btnEntrar} type="submit" value="Entrar" />
      </form>
    </div>
  );
};

export default Login;
