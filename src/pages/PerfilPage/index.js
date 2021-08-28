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

  const haveAddress = false;

  const buttonAddAddres = () => {
    if (haveAddress === false) {
      return <button className="add-address">+ Adicionar Endereço</button>;
    } else {
      return <div></div>;
    }
  };

  let adrassData = buttonAddAddres();

  return (
    <div>
      <Menu page={'perfil'} />
      <LogoSty src={Logo} alt="logo" />
      <div className="container">
        <div className="left-container">
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
          <div className="divider"></div>
          <div className="address">{adrassData}</div>
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  );
}

export default PerfilPage;
