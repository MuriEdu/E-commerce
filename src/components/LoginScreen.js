import { SloganLogin, TopMenu, LoginForm, BottonLinkForm, FormInput } from "../styles";

function LoginScreen (){
    return(
        <div>
            <TopMenu></TopMenu>
            <SloganLogin>Faça parte da cultura <b>sneakerhead</b> </SloganLogin>
            <LoginForm>
                <FormInput
                    placeholder={'E-MAIL'}
                />
            </LoginForm>
            <BottonLinkForm>
                Ainda não tem cadastro? <br/> Clique <b>aqui</b> para se cadastrar
            </BottonLinkForm>
        </div>
    )
}

export default LoginScreen;