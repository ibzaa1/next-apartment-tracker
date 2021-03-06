import { useState } from 'react';

// Comp Import
import Card from './Card';
import Favorite from './Favorite';
import Image from 'next/image';

// Data Import
import { apartments } from '../data/apartments';
import { isLessThan500 } from '../data/isLessThan500';
import { isBetween501And800 } from '../data/isBetween501And800';
import { isBetween801And1200 } from '../data/isBetween801And1200';
import { Plus1200 } from '../data/Plus1200';

const ApartmentList = () => {
  const [displayApartments, setDisplayApartment] = useState(apartments);
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className='flex pb-2 justify-center'>
        <button
          className='text-3xl absolute'
          onClick={() => setShowFilter(handleShowFilter)}
        >
          {showFilter ? 'Hide Filter ' : 'Show Filter'}
        </button>

        {showFilter && (
          <div>
            <button
              className='m-10 p-2 text-2xl rounded border-b border-black hover:bg-gray-400 duration-500'
              onClick={() => {
                setDisplayApartment(isLessThan500);
              }}
            >
              € 500 or less
            </button>

            <button
              className='m-10 p-2 text-2xl rounded border-b border-black hover:bg-gray-400 duration-500'
              onClick={() => {
                setDisplayApartment(isBetween501And800);
              }}
            >
              € 500 to 800
            </button>

            <button
              className='m-10 p-2 text-2xl rounded border-b border-black hover:bg-gray-400 duration-500'
              onClick={() => {
                setDisplayApartment(isBetween801And1200);
              }}
            >
              € 801 to 1200
            </button>

            <button
              className='m-10 p-2 text-2xl rounded border-b border-black hover:bg-gray-400 duration-500'
              onClick={() => {
                setDisplayApartment(Plus1200);
              }}
            >
              € 1200+
            </button>

            <button
              className='m-10 p-2 text-2xl rounded border-b border-black hover:bg-gray-400 duration-500'
              onClick={() => {
                setDisplayApartment(apartments);
              }}
            >
              View All
            </button>
          </div>
        )}
      </div>

      <div className='grid grid-rows-3 grid-cols-3 justify-center m-4 pt-3'>
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
    </>
  );
};
export default ApartmentList;
