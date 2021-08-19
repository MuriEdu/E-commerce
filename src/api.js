import axios from 'axios';

export const sendUser = (email, password) => {
  axios
    .post('http://localhost:3001/login', {
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
