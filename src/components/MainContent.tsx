// Components
import Button from './Button';
import FileItem from './FileItem';
import Search from './Search';
import TabSelect from './TabSelect';
import FileUploadModal from './FileUploadModal';
// Icons
import { HiUserCircle, HiOutlineUpload } from 'react-icons/hi';

const MainContent = () => {
  return (
    <div className='p-4 flex flex-col flex-1 px-12'>
      <div className='flex items-center space-x-12'>
        <Search />
        <div className='basis-32 flex items-center space-x-2 text-gray-500'>
          <HiUserCircle className='text-4xl' />
          <p>Hi User</p>
        </div>
      </div>

      <div className='text-3xl uppercase mt-6 font-bold'>My Files</div>

      <TabSelect />

      <div className='transition-all flex-1 overflow-y-scroll my-3 pr-3'>
        {true ? (
          Array(10)
            .fill(true)
            .map((_, i) => <FileItem key={i} />)
        ) : (
          <div className='p-5 bg-gray-100 rounded-lg'>
            <p className='text-2xl font-medium mb-1'>No Uploads Yet</p>
            <p className='text-gray-600'>
              Click the button below to start uploading
            </p>
          </div>
        )}
      </div>

      <Button>
        <HiOutlineUpload className='text-xl' />
        <span>Upload Files</span>
      </Button>

      <FileUploadModal />
    </div>
  );
};

export default MainContent;
