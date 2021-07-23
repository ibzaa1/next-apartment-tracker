import { apartments } from '../data/apartments';
import Card from './Card';
import Favorite from './Favorite';
import Image from 'next/image';

const ApartmentList = () => {
  // function filter500Less() {
  //   if (apartments.rent < 500) {

  // }
  return (
    <div
      className='grid grid-rows-3 grid-cols-3 justify-center m-4'
      // key={apartments.location} - WRONG!!!!
    >
      {/* <button onClick={filter500Less}>Click Me</button> */}
      {apartments.map((apartment) => (
        <div className='p-2' key={apartment.picture}>
          <Card>
            <div className='p-3 text-center'>
              {/* {apartments
                .filter((apartments) => apartments.rent < 500)
                .map((filteredAp) => (
                <div>{filteredAp.location}</div>
                ))} */}
              <Image
                src={`https://source.unsplash.com/${apartment.picture}`}
                width={100}
                height={100}
              ></Image>
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
