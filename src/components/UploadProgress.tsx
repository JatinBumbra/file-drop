import { useState } from 'react';
// Icons
import { HiChevronUp, HiChevronDown, HiCheckCircle } from 'react-icons/hi';

const UploadProgress = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className='fixed bottom-4 right-6 bg-white shadow-xl w-96 border-2 rounded-xl'>
      <div
        className={`flex flex-col space-y-2 overflow-y-scroll transition-all ${
          show ? 'max-h-80' : 'max-h-0'
        }`}
      >
        {Array(10)
          .fill(true)
          .map((_, i) => (
            <div
              className={`px-4 ${
                i ? 'pt-2' : 'pt-4'
              } pb-5 border-b border-gray-300`}
              key={i}
            >
              <div className='flex justify-between'>
                <p className='font-medium flex-1 flex space-x-1'>
                  <span>Lorem ipsum dolor</span>
                  <HiCheckCircle className='text-green-600 text-lg' />
                </p>
                <p className='text-sm text-gray-500 flex-1 text-right'>
                  888.88/888.88 MB
                </p>
              </div>
              <div className='relative mt-2'>
                <div className='absolute bg-green-100 w-full h-1.5 rounded'></div>
                <div
                  className='absolute bg-green-500 h-1.5 rounded'
                  style={{ width: `${i * 2 + 5}%` }}
                ></div>
              </div>
            </div>
          ))}
      </div>
      <div
        className={`flex items-center justify-between p-4 cursor-pointer z-10 active:bg-gray-100 ${
          show ? 'border-t border-gray-300' : ''
        }`}
        onClick={() => setShow((prev) => !prev)}
      >
        <p className='text-lg font-medium uppercase select-none'>
          Uploading...
        </p>
        {show ? (
          <HiChevronDown className='text-2xl' />
        ) : (
          <HiChevronUp className='text-2xl' />
        )}
      </div>
    </div>
  );
};

export default UploadProgress;
