import { apartments } from '../data/apartments';
import Card from './Card';
import Favorite from './Favorite';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ApartmentList = () => {
  const [filter500, setFilter500] = useState(false);

  const handleFilter = () => {
    setFilter500(true);
  };

  useEffect(() => {
    const result = apartments.filter((apartment) => apartment.rent <= 500);
    <Card>{result}</Card>;
    console.log(result);
    // apartments.map((apartment) => {
    //   const result = Object.values(apartment).filter(
    //     (apart) => apart.rent >= 500

    //   );
    //   console.log(result);
    // // if (apartment.rent <= 500) {
    // <Card>
    //   <div className='p-3 text-center'>
    //     <Image
    //       src={`https://source.unsplash.com/${apartment.picture}`}
    //       width={150}
    //       height={150}
    //     ></Image>
    //     <p>Rent Price: €{apartment.rent}</p>
    //     <p>Apartment Size: {apartment.size} (sqm)</p>
    //     <p>Apartment Location: {apartment.location}</p>
    //     <Favorite></Favorite>
    //   </div>
    // </Card>;
    // // }
    // });
  }, [filter500]);

  return (
    <div className='grid grid-rows-3 grid-cols-3 justify-center m-4'>
      {/* <button
        onClick={handleFilter}
        className='border-4 border-gray-400 hover:bg-gray-200 p-2 mx-2 rounded-xl'
      >
        €500 or less
      </button> */}
      {apartments.map((apartment) => (
        <div className='p-2' key={apartment.picture}>
          <Card>
            <div className='p-3 text-center'>
              <Image
                src={`https://source.unsplash.com/${apartment.picture}`}
                width={150}
                height={150}
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
