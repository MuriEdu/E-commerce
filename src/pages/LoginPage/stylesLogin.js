import styled from "styled-components";


export const TopMenu = styled.div`
    background-color: #5816B7;
    flex: 1;
    height: 60px;
`
export const SloganLogin = styled.p`
    color: #000000;
    font-size: 65px;
    text-align: center;
`
export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E7D9FF;
    width: 708px;
    height: 455px;
    margin-top: 108px;
    margin: auto;
    border-radius: 50px;
`

export const FormInput = styled.input`
    width: 550px;
    height: 58px;
    border-radius: 25px;
    text-align: center;
    font-size: 25px;
    border: black;
    margin-bottom: 30px;    
    ::placeholder,
    ::-webkit-input-placeholder{
        color: #C9C6C6;
    }
    `
    export const DivInput = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #E7D9FF;
    `

    export const LoginButton = styled.button`
        width: 400px;
        height: 77.67px;
        border-radius: 50px;
        background-color: #5816B7;
        font-size: 28px;
        color: white;
        border: black;
    `

    export const LoginTxt = styled.p`
        color: #5816B7;
        font-size: 35px;
        text-align: center;
        margin-top: 26px;
    `

    export const BottonLinkForm = styled.p`
        color: #5816B7;
        font-size: 20px;
        text-align: center;
        margin-top: 35px;
        margin-bottom: 98px;
    `
    export const LogoSty = styled.img`
        width: 250px;
        height: 110px;
        margin-top: 22px;
    `

    export const EyeButton = styled.button`
        position: absolute;
        width: 50px;
        top: 680px;
        right: 485px;
        background-color: white;
        border: none;
        border-radius: 25px;
    `
