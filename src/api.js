import axios from 'axios';

export const loginUser = (email, password) => {
  axios
    .post('http://localhost:3001/login', {
      email: email,
      password: password,
    })
    .then((res) => {
      alert(`usuário logado com sucesso, seja bem vindo "${res.data.name}"`);
    })
    .catch((err) => {
      alert(
        'Erro ao fazer login, Por favor verifique se você digitou email e senha corretamentes'
      );
    });
};

export const registerUser = (name, email, password) => {
  axios
    .post('http://localhost:3001/register', {
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      alert('USUÁRIO CADASTRADO COM SUCESSO');
      console.log(res);
    })
    .catch((err) => {
      alert('ERRO AO CADASTRAR USUÁRIO');
      console.log(err);
    });
};
