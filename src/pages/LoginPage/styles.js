import styled from 'styled-components';

export const SloganLogin = styled.p`
  color: #000000;
  font-size: 65px;
  text-align: center;
`;
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7d9ff;
  width: 708px;
  height: 455px;
  margin-top: 108px;
  margin: auto;
  border-radius: 50px;
`;

export const EmailInput = styled.input`
  width: 550px;
  height: 58px;
  border-radius: 25px;
  text-align: center;
  font-size: 25px;
  border: black;
  margin-bottom: 30px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c9c6c6;
  }
`;

export const PasswordInput = styled.input`
  width: 505px;
  height: 58px;
  border-radius: 25px;
  text-align: center;
  font-size: 25px;
  border: black;
  margin-right: 10px;
  margin-bottom: 30px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #b8b8b8;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7d9ff;
`;

export const LoginButton = styled.button`
  margin-top: 15px;
  width: 55%;
  height: 17%;
  border-radius: 50px;
  background-color: #5816b7;
  font-size: 28px;
  color: white;
  border: black;
  :active {
    background-color: #6a33b8;
    width: 54%;
    height: 16%;
  }
`;

export const LoginTxt = styled.p`
  color: #5816b7;
  font-size: 35px;
  text-align: center;
  margin-top: 26px;
`;

export const BottonLinkForm = styled.p`
  color: #5816b7;
  font-size: 20px;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 98px;
`;
export const LogoSty = styled.img`
  width: 250px;
  height: 110px;
  margin-top: 22px;
`;

export const EyeButton = styled.button`
  width: 35px;
  height: 25px;
  background-color: white;
  border: none;
  border-radius: 25px;
`;
