import React, { useState } from 'react';
import './styles.css';
import Menu from '../../components/Menu';
import { LogoSty } from '../LoginPage/styles';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function PerfilPage() {
  const JSisAuth = localStorage.getItem('@EC-ISAUTH');
  const JSuser = localStorage.getItem('@EC-USER');

  const isAuth = JSON.parse(JSisAuth);
  const user = JSON.parse(JSuser);

  const [addresValue, setAddressValue] = useState('');
  const [isPopupVisible, setisPopupVisible] = useState(false);
  const [haveAddress, setHaveAddres] = useState(false);

  if (isAuth === null) {
    window.location.assign('http://localhost:3000/login');
    return;
  }
  if (isAuth === false) {
    window.location.assign('http://localhost:3000/login');
    return;
  }

  const userName = user[0].name;

  let haveRequest = false;

  const buttonAddAddres = (address) => {
    if (haveAddress === false) {
      return (
        <button
          className="add-address"
          onClick={() => {
            setisPopupVisible(true);
          }}
        >
          + Adicionar Endereço
        </button>
      );
    } else {
      return (
        <button
          className="add-address"
          onClick={() => {
            setisPopupVisible(true);
          }}
        >
          {address}
        </button>
      );
    }
  };
  let adrassData = buttonAddAddres(addresValue);

  const getRequests = () => {
    if (haveRequest === false) {
      return (
        <div className="requests-box">
          <h2 className="no-request-title">Você ainda não tem nehum pedido</h2>
          <Link className="link-products" to="/produtos">
            Ver produtos
          </Link>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  let requestesData = getRequests();

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
          <div className="divider-perfil"></div>
          <div className="address">{adrassData}</div>
        </div>
        <div className="right-container">
          {isPopupVisible ? (
            <div className="form-address">
              <button
                className="close-form"
                onClick={() => {
                  setisPopupVisible(false);
                }}
              >
                X
              </button>
              <input
                className="form-input"
                placeholder="Digite seu endereço"
                value={addresValue}
                onChange={(e) => {
                  setAddressValue(e.target.value);
                }}
              />
              <button
                className="submit-form"
                onClick={() => {
                  if (addresValue.trim() !== '') {
                    setHaveAddres(true);
                    setisPopupVisible(false);
                  }
                }}
              >
                Enviar
              </button>
            </div>
          ) : null}
          <h2 className="requests-title">Meus Pedidos</h2>
          {requestesData}
        </div>
      </div>
    </div>
  );
}

export default PerfilPage;
