import { HiOutlineDownload } from 'react-icons/hi';
import { FileItem as IFileItem } from '../@types/interface';
import { formatFileSize } from '../utils';

const FileItem = ({ data }: { data: IFileItem }) => {
  return (
    <div className='flex items-stretch border w-full rounded-xl overflow-hidden hover:border-blue-500 my-3'>
      <div className='px-4 py-3 flex-1'>
        <p className='font-medium text-lg'>{data.name}</p>
        <p className='text-sm text-gray-400'>
          {formatFileSize(data.size)}
          {data.uploadDate
            ? ` | ${new Date(data.uploadDate).getUTCDate()}-${new Date(
                data.uploadDate
              ).getUTCMonth()}-${new Date(data.uploadDate).getFullYear()}`
            : null}
        </p>
      </div>
      <div className='px-6 flex items-center justify-center cursor-pointer transition-all hover:bg-blue-500 hover:text-white active:bg-blue-700'>
        <HiOutlineDownload className='text-2xl font-bold' />
      </div>
    </div>
  );
};

export default FileItem;
