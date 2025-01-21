import { User } from '../../../data/types/user';

const validate = (userCredentials: User) => {
  const { email, password } = userCredentials;

  if (email == 'danilo@mail.com' && password == '1234') {
    return true;
  }

  return false;
};

export { validate };
