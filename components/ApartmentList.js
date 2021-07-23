import { apartments } from '../data/apartments';
import Card from './Card';
import Favorite from './Favorite';
// import Image from 'next/image';

const ApartmentList = () => {
  // function filter500Less() {
  //   if (apartments.rent < 500) {

  // }
  return (
    <div
      className='flex flex-wrap justify-center mt-2'
      // key={apartments.location} - WRONG!!!!
    >
      {/* <button onClick={filter500Less}>Click Me</button> */}
      {apartments.map((apartment) => (
        <div className='p-2 m-1' key={apartment.location}>
          <Card>
            <div className='p-3'>
              {/* {apartments
                .filter((apartments) => apartments.rent < 500)
                .map((filteredAp) => (
                  <div>{filteredAp.location}</div>
                ))} */}
              <p>Rent Price: €{apartment.rent}</p>
              <p>Apartment Size: {apartment.size} (sqm)</p>
              <p>Apartment Location: {apartment.location}</p>
              <Favorite></Favorite>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default ApartmentList;
