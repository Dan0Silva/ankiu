import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';
import { useState } from 'react';
import PasswordInput from '../../components/PasswordInput';
import { validate } from '../../services/validation/Auth';
import { toast } from 'react-toastify';

export default () => {
  const photo = '/images/background1.jpg';

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onCreateAccount = () => {
    navigate('/register');
  };

  const tryLogin = () => {
    const authResponse = validate({
      name: '',
      email,
      password,
    });

    if (authResponse) {
      toast.success('Login Successful!');
      navigate('/home');
    } else {
      toast.error('Incorrect email or password');
    }
  };

  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="flex flex-col h-full w-full lg:w-5/12">
        <Header />
        <form className="items-center justify-center flex mb-28 flex-1 flex-col py-16">
          <h2 className="text-4xl w-10/12 sm:w-8/12 ml-8 mb-8 font-medium text-zinc-800">
            Login
          </h2>

          <CustomInput
            value={email}
            onChange={setEmail}
            type="text"
            placeholder="Type your email . . ."
            name="E-mail"
          />
          <PasswordInput
            value={password}
            onChange={setPassword}
            placeholder="Type your password . . ."
            name="Password"
          />

          <div className="h-24 flex items-center w-10/12 sm:w-8/12 px-4 justify-start space-x-8 mt-16">
            <CustomButton
              type="button"
              content="Sign-in"
              className="w-full"
              onClick={tryLogin}
            />
          </div>

          <div className="flex items-center w-10/12 sm:w-8/12 px-4 justify-start space-x-8">
            <div className="bg-zinc-800 h-1 w-full" />
            <p>or</p>
            <div className="bg-zinc-800 h-1 w-full" />
          </div>

          <div className="h-24 flex items-center w-10/12 sm:w-8/12 px-4 justify-start space-x-8">
            <CustomButton
              type="button"
              content="Create your account"
              className="w-full bg-blue-700 hover:bg-blue-600"
              onClick={onCreateAccount}
            />
          </div>
        </form>
      </div>
      <div className="h-full w-7/12 p-4 hidden lg:block">
        <img
          src={photo}
          alt="bg-image"
          className="h-full w-full object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};
