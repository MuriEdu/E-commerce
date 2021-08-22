import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../api';

import {
  SloganLogin,
  BottonLinkForm,
  EmailInput,
  PasswordInput,
  LoginBox,
  LoginTxt,
  LoginButton,
  LogoSty,
  EyeButton,
  DivInput,
} from './styles';
import Logo from '../assets/logo.png';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import Menu from '../../components/Menu';
import getUser from '../../components/getUser/getUser';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);

  const redirectPerfil = () => {
    window.location.assign('http://localhost:3000/perfil');
  };

  return (
    <div style={{ backgroundColor: '#F7F7F7' }}>
      <Menu page={'login'} />
      <LogoSty src={Logo} alt="logo" />
      <SloganLogin>
        Faça parte da cultura{' '}
        <i>
          <b>sneakerhead</b>
        </i>{' '}
      </SloganLogin>
      <LoginBox>
        <LoginTxt>
          <b>LOGIN</b>
        </LoginTxt>
        <DivInput>
          <EmailInput
            placeholder={'E-MAIL'}
            type={'text'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <PasswordInput
              placeholder={'SENHA'}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
            </EyeButton>
          </div>
        </DivInput>
        <LoginButton
          onClick={() => {
            try {
              loginUser(email, password).then((res) => {
                if (res.status !== 200) {
                  const jsAuth = JSON.stringify(false);
                  const jsData = JSON.stringify(null);

                  localStorage.setItem('@EC-ISAUTH', jsAuth);
                  localStorage.setItem('@EC-USER', jsData);
                  console.log('Erro ao fazer login');
                } else {
                  const jsAuth = JSON.stringify(true);
                  const jsData = JSON.stringify(res.data);

                  localStorage.setItem('@EC-ISAUTH', jsAuth);
                  localStorage.setItem('@EC-USER', jsData);
                  redirectPerfil();
                }
              });
            } catch (err) {
              setUser({ status: 400 });
            }
          }}
        >
          ENTRAR
        </LoginButton>
      </LoginBox>
      <BottonLinkForm>
        Ainda não tem cadastro? <br /> Clique{' '}
        <Link to="/cadastro">
          <b>aqui</b>
        </Link>{' '}
        para se cadastrar
      </BottonLinkForm>
      <button
        onClick={() => {
          console.log(getUser(null));
        }}
      >
        LOG
      </button>
    </div>
  );
}

export default LoginScreen;
