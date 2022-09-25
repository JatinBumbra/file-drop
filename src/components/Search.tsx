import { HiSearch } from 'react-icons/hi';

const Search = () => {
  return (
    <div className='p-2 border rounded-lg flex items-center flex-1 space-x-3 hover:border-gray-400 transition-colors focus-within:outline focus-within:outline-blue-500'>
      <HiSearch className='text-2xl text-gray-500' />
      <input placeholder='Search' className='w-full outline-none' />
    </div>
  );
};

export default Search;
