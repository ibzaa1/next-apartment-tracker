import { apartments } from '../data/apartments';
import Card from './Card';

const Filter = () => {
  // apartments
  //   .filter((apartments) => apartments.rent <= 500)
  //   .map((filteredApartments) => (
  //     <Card>
  //       <div>{filteredApartments.location}</div>
  //     </Card>
  //   ));

  return (
    <div>
      <h2 className='text-2xl pb-2'>Pick your price:</h2>
      <button className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2 rounded-xl'>
        500 or less
      </button>

      <button className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2 rounded-xl'>
        €501-800
      </button>

      <button className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2 rounded-xl'>
        €801-1200
      </button>

      <button className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2 rounded-xl'>
        €1200+
      </button>

      <button className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2 rounded-xl'>
        View All
      </button>
    </div>
  );
};

export default Filter;
