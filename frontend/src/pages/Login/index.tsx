import { toast } from 'react-toastify';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';
import { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Header />
      <div className="items-center justify-center flex flex-col py-16  ">
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

        <div className="h-24 flex items-center w-5/12 px-4 justify-between mt-12">
          <CustomButton
            content="Sign-in"
            onClick={() => {
              alert(email + '-' + password);
            }}
          />
        </div>
      </div>
    </>
  );
};
