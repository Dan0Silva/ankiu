import { useContext, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

interface TextInputProps {
  placeholder: string;
  name: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export default (props: TextInputProps) => {
  const [inputType, setInputType] = useState('password');
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const EyeIcon = () => {
    const eyeOn = (
      <HiEye
        onClick={handlePassword}
        color="#fff"
        size={28}
        className="mx-4 z-10 absolute"
      />
    );
    const eyeOff = (
      <HiEyeOff
        onClick={handlePassword}
        color="#fff"
        size={28}
        className="mx-4 z-10 absolute"
      />
    );

    return hiddenPassword ? eyeOn : eyeOff;
  };

  const handlePassword = () => {
    if (inputType == 'password') {
      setInputType('text');
    } else if (inputType == 'text') {
      setInputType('password');
    }

    setHiddenPassword(!hiddenPassword);
  };

  const handlePropertyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="h-28 w-8/12 justify-center flex flex-col px-4">
      <p className="text-zinc-800 font-semibold text-xl">{props.name}</p>
      <div className="w-full flex items-center justify-end mt-2">
        <input
          onChange={handlePropertyChange}
          value={props.value}
          className="h-12 rounded-md w-full px-4 pr-14 bg-gray-800 text-white placeholder:text-zinc-400 shadow-md"
          type={inputType}
          placeholder={props.placeholder}
        />

        <EyeIcon />
      </div>
    </div>
  );
};
