import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className='bg-blue-500 text-white font-bold text-lg p-3 px-6 pr-10 rounded-lg flex items-center justify-center space-x-2 transition-all hover:bg-blue-700 active:bg-blue-800'>
      {children}
    </button>
  );
};

export default Button;
