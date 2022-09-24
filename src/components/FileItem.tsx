import { HiDownload } from 'react-icons/hi';

const FileItem = () => {
  return (
    <div className='flex items-stretch border w-full rounded-xl overflow-hidden hover:border-blue-500 my-3'>
      <div className='px-4 py-3 flex-1'>
        <p className='font-medium text-lg'>resume.pdf</p>
        <p className='text-sm text-gray-400'>12.04 MB | September 24, 2022</p>
      </div>
      <div className='px-6 flex items-center justify-center cursor-pointer transition-all hover:bg-blue-500 hover:text-white'>
        <HiDownload className='text-2xl font-bold' />
      </div>
    </div>
  );
};

export default FileItem;
