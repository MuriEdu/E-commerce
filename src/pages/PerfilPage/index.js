import React from 'react';
import getUser from '../../components/getUser/getUser';
import Menu from '../../components/Menu';

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

  return (
    <div>
      <Menu page={'perfil'} />
      <h2> {`OLÁ ${user[0].name}`} </h2>
    </div>
  );
}

export default PerfilPage;
