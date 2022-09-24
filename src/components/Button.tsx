import { ReactNode } from 'react';

const Button = ({
  children,
  disabled,
}: {
  children: ReactNode;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      className='bg-blue-500 text-white font-bold text-lg p-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all hover:bg-blue-700 active:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50'
    >
      {children}
    </button>
  );
};

export default Button;
