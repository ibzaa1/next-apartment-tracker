import { apartments } from '../data/apartments';
import Card from './Card';
// import Image from 'next/image';

const ApartmentList = () => {
  return (
    <div className='flex flex-wrap justify-center mt-20'>
      {apartments.map((apartment) => (
        <div className='p-2 m-1'>
          <Card>
            <div className='p-3'>
              <p>Rent Price: €{apartment.rent}</p>
              <p>Apartment Size: {apartment.size}</p>
              <p>Apartment Location: {apartment.location}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default ApartmentList;

/* {apartments
.filter((apartments) => apartments.rent > 1000)
.map((filteredAp) => (
<div>{filteredAp.location}</div>
))} */
