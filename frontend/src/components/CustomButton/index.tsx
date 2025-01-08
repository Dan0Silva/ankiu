import { MouseEventHandler } from 'react';

interface ButtonProps {
  content: string;
  onClick: MouseEventHandler;
  className?: string | '';
}

export default (props: ButtonProps) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`h-12 min-w-32 rounded-md px-4 mt-2 bg-gray-800 text-white font-semibold shadow-md hover:bg-gray-700 hover:-translate-y-1 duration-500 ${props.className}`}
      >
        {props.content}
      </button>
    </>
  );
};
