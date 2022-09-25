import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
// Components
import Button from './Button';
// Icons
import { HiOutlineUpload, HiOutlineXCircle, HiOutlineX } from 'react-icons/hi';
// Misc
import { formatFileSize } from '../utils';

const FileUploadModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [totalSelectedSize, setTotalSelectedSize] = useState<number>(0);

  useEffect(() => {
    setTotalSelectedSize(files.reduce((acc, file) => acc + file.size, 0));
  }, [files]);

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length)
      setFiles((prev) => [...e.target.files!, ...prev]);
  };

  const handleRemove = (e: ChangeEvent<HTMLElement>) => {
    setFiles((prev) => [
      ...prev.slice(0, Number(e.target.id)),
      ...prev.slice(Number(e.target.id) + 1),
    ]);
  };

  const handleUpload = () => {
    handleClose();
  };

  const handleClose = () => {
    setFiles([]);
    setOpen(false);
  };

  return open ? (
    <>
      <div
        className='bg-black bg-opacity-60 fixed top-0 left-0 h-screen w-screen'
        onClick={handleClose}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 shadow-2xl w-3/5 h-3/4`}
      >
        <div className='flex flex-col p-5 bg-white h-full rounded-xl overflow-hidden'>
          <div className='flex items-center justify-between text-xl'>
            <p className='uppercase font-bold'>Select Files</p>
            <HiOutlineX
              className='cursor-pointer text-gray-500 transition-all hover:text-gray-900'
              onClick={handleClose}
            />
          </div>

          <div className='flex space-x-5 h-full mt-3 mb-5 overflow-hidden'>
            <div className='h-full bg-gray-100 text-gray-500 rounded-xl basis-72 p-5 flex flex-col items-center justify-center border-2 border-dashed font-medium text-2xl text-center space-y-2 relative transition-all hover:bg-gray-200 hover:border-gray-400'>
              <p>Drag and drop your files here</p>
              <p>OR</p>
              <p>Click here to Browse</p>
              <input
                type='file'
                title=''
                className='absolute w-full h-full cursor-pointer opacity-0'
                onChange={handleFileInput}
                multiple
              />
            </div>

            <div className='flex-1 flex flex-col h-full'>
              <p className='uppercase font-medium mb-2'>
                Selected ({files.length}) - {formatFileSize(totalSelectedSize)}
              </p>
              <div className='overflow-y-scroll h-full flex flex-col space-y-2 pr-2'>
                {files.length ? (
                  files.map((file, i) => (
                    <div
                      className='p-2 pl-4 border rounded-lg flex space-x-2 transition-all hover:border-blue-500'
                      key={i}
                    >
                      <div className='flex-1'>
                        <p className='font-bold'>{file.name}</p>
                        <p className='text-sm text-gray-400'>
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                      <HiOutlineXCircle
                        id={i.toString()}
                        onClick={handleRemove}
                        className='cursor-pointer transition-all text-gray-400 hover:text-gray-800'
                      />
                    </div>
                  ))
                ) : (
                  <p className='py-3 px-4 font-medium rounded bg-gray-100'>
                    No files selected
                  </p>
                )}
              </div>
            </div>
          </div>
          <Button disabled={!files.length} onClick={handleUpload}>
            <HiOutlineUpload className='text-xl' />
            <span>Start Upload</span>
          </Button>
        </div>
      </div>
    </>
  ) : null;
};

export default FileUploadModal;
