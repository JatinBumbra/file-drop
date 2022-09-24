const menuItems = ['All', 'Documents', 'Images', 'Music', 'Videos'];

const TabSelect = () => {
  return (
    <div className='flex space-x-8 items-center mt-3 border-b'>
      {menuItems.map((item) => (
        <div
          className={`pb-2 border-b-2 border-blue-500  uppercase text-sm cursor-pointer transition-all ${
            item === 'All'
              ? 'text-blue-500 font-bold'
              : 'border-transparent text-gray-400 hover:text-gray-800'
          }`}
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TabSelect;
