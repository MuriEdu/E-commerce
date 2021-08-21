import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { IoLogInSharp } from 'react-icons/io5';

function PerfilButton({ imagem }) {
  return (
    <Link className="perfil-link" to="/login">
      <IoLogInSharp className="login-icon" />
    </Link>
  );
}

export default PerfilButton;
