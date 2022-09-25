import Logo from '../assets/logo.svg';

const menuItems = ['Files', 'Archived', 'Deleted', 'Shared'];

const Sidebar = () => {
  return (
    <div className='basis-48 bg-gray-100 border-r border-gray-200 h-full'>
      <div className='px-6 py-5'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='border-b border-gray-300'></div>
      <ol className='py-5'>
        {menuItems.map((item) => (
          <li
            className={`py-4 px-6 mr-4 rounded-r-full uppercase transition-all cursor-pointer  ${
              item === 'Files'
                ? 'font-bold text-blue-500 bg-blue-100'
                : 'text-gray-500 hover:bg-gray-200 active:bg-blue-200'
            }`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Sidebar;
