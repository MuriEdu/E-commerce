import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import { registerUser } from '../../api';
import './styles.css';

function ProductsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState('');
  const [notRegister, setNotRegister] = useState('');

  const submit = () => {
    if (name.trim() === '') {
      setNotRegister('*Por Favor, digite seu nome!');
      return;
    }
    if (email.trim() === '') {
      setNotRegister('*Por Favor, digite seu e-mail!');
      return;
    }
    if (password.trim() === '') {
      setNotRegister('*Por Favor, digite sua senha!');
      return;
    }
    if (password.trim().length < 6) {
      setNotRegister('*Sua senha deve ter no mínimo 6 caracteres');
      return;
    }
    if (checkPass.trim() === '') {
      setNotRegister('*Por Favor, confirme sua senha!');
      return;
    }
    if (checkPass.trim() !== password.trim()) {
      setNotRegister('*As senhas não coincidem!');
      return;
    } else {
      setNotRegister('');
      registerUser(name, email, password);
    }
  };

  return (
    <div>
      <div>
        <Menu page={'cadastro'} />
      </div>
      <div className="view">
        <h3 className="slogan">
          <h3>
            Junte-se a nós e nos ajude a levar a cultura{' '}
            <b className="bold-slogan">Sneakerhead</b> para todo o Brasil
          </h3>
        </h3>
        <div className="form-box">
          <p className="box-text">CADASTRO</p>
          <input
            type="string"
            value={name}
            className="name-input"
            placeholder="NOME"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="string"
            value={email}
            className="email-input"
            placeholder="E-MAIL"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            className="password-input"
            placeholder="SENHA"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="string"
            value={checkPass}
            className="confirm-password-input"
            placeholder="CONFIRME SUA SENHA"
            onChange={(e) => {
              setCheckPass(e.target.value);
            }}
          />

          <p className="submit-err">{notRegister}</p>
          <button
            className="form-submit"
            onClick={() => {
              submit();
            }}
          >
            Junte-se à nós
          </button>
        </div>
        <div className="login-link">
          <p>
            Já tem uma conta? Faça login <Link to="/login">aqui</Link>!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
