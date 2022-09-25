import { useState } from 'react';
// Components
import Button from './Button';
import FileItem from './FileItem';
import Search from './Search';
import TabSelect from './TabSelect';
import FileUploadModal from './FileUploadModal';
import UploadProgress from './UploadProgress';
// Icons
import Spinner from '../assets/spinner.svg';
import { HiUserCircle, HiOutlineUpload } from 'react-icons/hi';
// Context
import { useAppContext } from '../context';

const MainContent = () => {
  const { files } = useAppContext();

  const [selectFileModalOpen, setSelectFileModalOpen] =
    useState<boolean>(false);

  return (
    <div className='p-4 flex flex-col flex-1 px-10'>
      <div className='flex items-center space-x-12'>
        <Search />
        <div className='basis-32 flex items-center space-x-2 text-gray-800'>
          <HiUserCircle className='text-4xl text-gray-500' />
          <p className='font-medium'>Hi User</p>
        </div>
      </div>

      <div className='text-3xl uppercase mt-6 font-bold'>My Files</div>

      <TabSelect />

      <div className='transition-all flex-1 overflow-y-scroll my-3 pr-3'>
        {files.loading ? (
          <div className='flex items-center'>
            <img src={Spinner} alt='loading' className='h-16 w-16' />
            <p className='text-lg font-medium'>Loading Files...</p>
          </div>
        ) : files.data.length ? (
          files.data.map((_, i) => <FileItem key={i} />)
        ) : (
          <div className='p-5 bg-gray-100 rounded-lg'>
            <p className='text-2xl font-medium mb-1'>No Uploads Yet</p>
            <p className='text-gray-600 mb-4'>
              Click the button below to start uploading
            </p>
            <Button onClick={() => setSelectFileModalOpen(true)}>
              <HiOutlineUpload className='text-xl' />
              <span>Upload Files</span>
            </Button>
          </div>
        )}
      </div>

      <div className='flex justify-center'>
        <Button onClick={() => setSelectFileModalOpen(true)}>
          <HiOutlineUpload className='text-xl' />
          <span>Upload Files</span>
        </Button>
      </div>

      <UploadProgress />

      <FileUploadModal
        open={selectFileModalOpen}
        setOpen={setSelectFileModalOpen}
      />
    </div>
  );
};

export default MainContent;
