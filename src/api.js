import axios from 'axios';

function sendUser(email, password) {
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
}

export default sendUser;
