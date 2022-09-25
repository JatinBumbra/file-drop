import { EventHandler, ReactNode } from 'react';

const Button = ({
  children,
  disabled,
  fullWidth,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: EventHandler<any>;
}) => {
  return (
    <button
      disabled={disabled}
      className={`bg-blue-500 text-white font-bold p-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all hover:bg-blue-700 active:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50 ${
        fullWidth ? 'w-full' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
