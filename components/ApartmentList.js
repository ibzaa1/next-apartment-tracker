import { apartments } from '../data/apartments';
import Card from './Card';
import Favorite from './Favorite';
import Image from 'next/image';
import { useState } from 'react';

const ApartmentList = () => {
  const [displayApartments, setDisplayApartment] = useState(apartments);

  const is500Less = apartments.rent <= 2000;

  return (
    <div className='grid grid-rows-3 grid-cols-3 justify-center m-4'>
      {/* <button
        onClick={() => {
          setDisplayApartment([is500Less]);
        }}
      >
        Hello
      </button> */}

      <button
        onClick={() => {
          setDisplayApartment(apartments);
        }}
      >
        Reset
      </button>
      {displayApartments.map((apartment) => (
        <div className='p-2' key={apartment.picture}>
          <Card>
            <div className='pt-7 pb-5 text-center'>
              <Image
                src={`https://source.unsplash.com/${apartment.picture}`}
                width={150}
                height={150}
              />
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
