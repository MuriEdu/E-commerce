import axios from 'axios';

export const loginUser = (email, password) => {
  return axios
    .post('http://localhost:3001/login', {
      email: email,
      password: password,
    })
    .then((res) => {
      return res;
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return { status: 404 };
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

export const addAddress = (id, addAddress) => {
  axios.post('http://localhost:3001/register', {
    _id: id,
    addressReq: addAddress,
  });
};
