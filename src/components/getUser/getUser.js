let isUser = 404;

function getUser(user) {
  if (user) {
    isUser = user;
  }

  return isUser;
}

export default getUser;
