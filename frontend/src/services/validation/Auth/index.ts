const validate = (email: string, password: string) => {
  if (email == 'danilo@mail.com' && password == '1234') {
    return true;
  }

  return false;
};

export { validate };
