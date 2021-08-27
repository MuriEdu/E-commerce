import React from 'react';
import './styles.css';
import Menu from '../../components/Menu';
import { LogoSty } from '../LoginPage/styles';
import Logo from '../assets/logo.png';

// window.location.assign('http://localhost:3000/login');

function PerfilPage() {
  const JSisAuth = localStorage.getItem('@EC-ISAUTH');
  const JSuser = localStorage.getItem('@EC-USER');

  const isAuth = JSON.parse(JSisAuth);
  const user = JSON.parse(JSuser);

  if (isAuth === null) {
    window.location.assign('http://localhost:3000/login');
    return;
  }
  if (isAuth === false) {
    window.location.assign('http://localhost:3000/login');
    return;
  }

  const userName = user[0].name;

  return (
    <div>
      <Menu page={'perfil'} />
      <LogoSty src={Logo} alt="logo" />
      <p className="user-name"> {userName.toUpperCase()} </p>
      <button
        className="logout"
        onClick={() => {
          const jsAuth = JSON.stringify(false);
          const jsData = JSON.stringify(null);

          localStorage.setItem('@EC-ISAUTH', jsAuth);
          localStorage.setItem('@EC-USER', jsData);
          window.location.reload();
        }}
      >
        Sair
      </button>
    </div>
  );
}

export default PerfilPage;
