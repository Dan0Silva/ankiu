import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';
import { useState } from 'react';

export default () => {
  const photo = '/images/background1.jpg';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="flex flex-col h-full w-5/12">
        <Header />
        <div className="items-center justify-center flex mb-28 flex-1 flex-col py-16">
          <CustomInput
            value={email}
            onChange={setEmail}
            type="text"
            placeholder="E-mail..."
            name="E-mail"
          />
          <CustomInput
            value={password}
            onChange={setPassword}
            type="text"
            placeholder="Password..."
            name="Password"
          />

          <div className="h-24 flex items-center w-8/12 px-4 justify-start space-x-8 mt-16">
            <CustomButton
              content="Sign-in"
              className="w-full"
              onClick={() => {
                alert(email + '-' + password);
              }}
            />
          </div>

          <div className="flex items-center w-8/12 px-4 justify-start space-x-8">
            <div className="bg-zinc-800 h-1 w-full" />
            <p>or</p>
            <div className="bg-zinc-800 h-1 w-full" />
          </div>

          <div className="h-24 flex items-center w-8/12 px-4 justify-start space-x-8">
            <CustomButton
              content="Create your account "
              className="w-full bg-blue-700 hover:bg-blue-600"
              onClick={() => {
                alert(email + '-' + password);
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-full w-7/12 p-4">
        <img
          src={photo}
          alt="bg-image"
          className="h-full w-full object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};
