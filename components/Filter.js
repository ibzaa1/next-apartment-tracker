import { apartments } from '../data/apartments';
import Card from './Card';

const Filter = () => {
  function filter500Less() {
    apartments
      .filter((apartments) => apartments.rent < 500)
      .map((filteredAp) => (
        <Card>
          <div>{filteredAp.location}</div>
        </Card>
      ));
  }
  return (
    <div>
      <h2>Filter:</h2>
      <button
        onClick={filter500Less}
        className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2'
      >
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
