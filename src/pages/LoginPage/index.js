import React, { useState } from 'react'

import { SloganLogin, TopMenu, BottonLinkForm, FormInput, LoginBox, LoginTxt, LoginButton, LogoSty, EyeButton, DivInput } from "./styles";
import Logo from '../assets/logo.png'
import { BsEyeSlash, BsEye } from "react-icons/bs";
import Menu from '../../components/Menu';

function LoginScreen (){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return(
        <div style={{backgroundColor: "#F7F7F7", }}>
            <Menu></Menu>
            <LogoSty src={Logo} alt='logo'/>
            <SloganLogin>Faça parte da cultura <b>sneakerhead</b> </SloganLogin>
            <LoginBox>
                <LoginTxt><b>LOGIN</b></LoginTxt>
                <DivInput>
                    <FormInput
                        placeholder={'E-MAIL'}
                        type={'text'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormInput
                        placeholder={'SENHA'}
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </DivInput>
                <EyeButton
                    onClick={() => setShowPassword(!showPassword)}
                >
                    
                     { showPassword ? <BsEyeSlash size={20}/> : <BsEye size={20} /> }
                
                </EyeButton>
                <LoginButton
                    onClick={() => alert(`${email}, ${password}`)}
                >ENTRAR</LoginButton>
            </LoginBox>
            <BottonLinkForm>
                Ainda não tem cadastro? <br/> Clique <b>aqui</b> para se cadastrar
            </BottonLinkForm>
        </div>
    )
}

export default LoginScreen;