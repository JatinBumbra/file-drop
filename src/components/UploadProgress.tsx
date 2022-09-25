import { useState } from 'react';
// Icons
import {
  HiChevronUp,
  HiChevronDown,
  HiCheckCircle,
  HiOutlineX,
} from 'react-icons/hi';
// Misc
import { useAppContext } from '../context';
import { formatFileSize } from '../utils';

const UploadProgress = () => {
  const { uploadState, closeUploadDialog } = useAppContext();

  const [show, setShow] = useState<boolean>(true);

  return uploadState.showProgressDialog ? (
    <div className='fixed bottom-4 right-6 bg-white shadow-xl w-96 border-2 rounded-xl'>
      <div
        className={`flex flex-col space-y-2 overflow-y-scroll transition-all ${
          show ? 'max-h-80' : 'max-h-0'
        }`}
      >
        {uploadState.files.map((file, i) => (
          <div
            className={`px-4 ${
              i ? 'pt-2' : 'pt-4'
            } pb-5 border-b border-gray-300`}
            key={i}
          >
            <div className='flex justify-between'>
              <p className='font-medium flex-1 flex space-x-1'>
                {file.uploaded >= file.size ? (
                  <HiCheckCircle className='text-green-600' />
                ) : null}
                <span className='flex-1'>{file.name}</span>
              </p>
              <p className='text-sm text-gray-500 flex-1 text-right'>
                {formatFileSize(file.uploaded)}/{formatFileSize(file.size)}
              </p>
            </div>
            <div className='relative mt-2'>
              <div className='absolute bg-green-100 w-full h-1.5 rounded'></div>
              <div
                className='absolute bg-green-500 h-1.5 rounded'
                style={{ width: `${(file.uploaded / file.size) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`flex items-center justify-between p-4 cursor-pointer z-10 active:bg-gray-100 ${
          show ? 'border-t border-gray-300' : ''
        }`}
        onClick={() =>
          !uploadState.isUploading
            ? closeUploadDialog()
            : setShow((prev) => !prev)
        }
      >
        <p className='text-lg font-medium uppercase select-none'>
          {uploadState.isUploading ? 'Uploading...' : 'Upload Complete!'}
        </p>
        {!uploadState.isUploading ? (
          <HiOutlineX className='text-2xl' />
        ) : show ? (
          <HiChevronDown className='text-2xl' />
        ) : (
          <HiChevronUp className='text-2xl' />
        )}
      </div>
    </div>
  ) : null;
};

export default UploadProgress;
