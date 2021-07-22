const Filter = () => {
  return (
    <div>
      <h2>Filter:</h2>
      <button className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2'>
        €500 or less
      </button>
      <button className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2'>
        €501-800
      </button>
      <button className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2'>
        €801-1200
      </button>
      <button className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2'>
        €1200+
      </button>
    </div>
  );
};

export default Filter;
