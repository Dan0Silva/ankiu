interface TextInputProps {
  type: string;
  placeholder: string;
  name: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export default (props: TextInputProps) => {
  const handlePropertyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="h-28 w-8/12 justify-center flex flex-col px-4 my-4">
      <p className="text-zinc-800 font-semibold text-xl">{props.name}</p>
      <input
        onChange={handlePropertyChange}
        value={props.value}
        className="h-12 rounded-md px-4 mt-2 bg-gray-800 text-white placeholder:text-white shadow-md"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};
