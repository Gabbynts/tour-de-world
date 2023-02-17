import PhotoCard from '@/components/PhotoCard';
import { photoWorlds } from '@/constant/photoWorlds';
import React, { useState } from 'react';

function Service() {
  const [active, setActive] = useState('2');

  return (
    <div className='pt-10'>
      <div className='flex w-full pt-5 justify-end pr-5'>
        <h2 className='text-[#ffffff] font-bold text-[50px] font-serif z-10'>
          Choose Your World
        </h2>
      </div>

      <div className='flex gap-x-5 -mt-9 min-h-[70vh] px-5 pb-10'>
        {photoWorlds.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            {...photo}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </div>
  );
}

export default Service;
