import { SloganLogin, TopMenu, BottonLinkForm, FormInput, LoginBox, LoginTxt, LoginButton, LogoSty } from "../styles";
import Logo from './assets/logo.png'

function LoginScreen (){
    return(
        <div style={{backgroundColor: "#F7F7F7", }}>
            <TopMenu></TopMenu>
            <LogoSty src={Logo} alt='logo'/>
            <SloganLogin>Faça parte da cultura <b>sneakerhead</b> </SloganLogin>
            <LoginBox>
                <LoginTxt><b>LOGIN</b></LoginTxt>
                <FormInput
                    style={{marginTop: 110,}}
                    placeholder={'E-MAIL'}
                />
                <FormInput
                    style={{marginTop: 223,}}
                    placeholder={'SENHA'}
                />
                <LoginButton>ENTRAR</LoginButton>
            </LoginBox>
            <BottonLinkForm>
                Ainda não tem cadastro? <br/> Clique <b>aqui</b> para se cadastrar
            </BottonLinkForm>
        </div>
    )
}

export default LoginScreen;