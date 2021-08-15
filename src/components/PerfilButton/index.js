import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function PerfilButton({ imagem }) {
  return (
    <button className="perfil-button">
      <Link className="perfil-link" to="/perfil">
        <img className="perfil-img" src={imagem} alt={'404'} />
      </Link>
    </button>
  );
}

export default PerfilButton;
