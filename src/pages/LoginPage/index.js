import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sendUser from '../../api';

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

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
        <LoginButton onClick={() => sendUser(email, password)}>
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
    </div>
  );
}

export default LoginScreen;
