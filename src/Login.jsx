import React from "react";
import "./Login.css";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

function Login() {
  return (
    <div className="login-container">
      <h1>LOGIN</h1>

      <div className="form-group">
        <label htmlFor="usuario">Usuário:</label>
        <input type="text" id="usuario" placeholder="Digite seu usuário" />
      </div>

      <div className="form-group">
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" placeholder="Digite sua senha" />
      </div>

      <div className="options">
        <label>
          <input type="checkbox" /> Manter conectado
        </label>
        <a href="#">Esqueceu a senha?</a>
      </div>

      <button className="btn-login">ENTRAR</button>

      <p>OU LOGAR COM</p>
      <div className="social-login">
        <button className="facebook"><FaFacebookF /></button>
        <button className="google"><FaGoogle /></button>
        <button className="apple"><FaApple /></button>
      </div>

      <small>
        Não tem conta? <a href="#">Inscrever-se</a>
      </small>
    </div>
  );
}

export default Login