import FilterButtons from './Filter';

const Navbar = () => {
  return (
    <nav className='text-center bg-gray-300 p-4 text-lg underline'>
      <a className='mx-80 text-3xl'>Apartment Tracker</a>

      <FilterButtons />
    </nav>
  );
};

export default Navbar;
