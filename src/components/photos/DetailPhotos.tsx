import React from 'react';

interface Props {
    name: string | undefined;
    image: string | undefined;
    desc: string | undefined;
    date: string | undefined;
}

function DetailPhotos({
    name, image, desc, date
}: Props) {
  return (
    <>
      <div className='relative flex items-center justify-center'>
        <h1
          className='whitespace-normal absolute hover:-z-10 p-5 uppercase text-[120px] font-medium text-white
                            transition duration-500'
        >
          {name}
        </h1>
        <div>
          <img
            src={image}
            alt={desc}
            className='w-[700px] rounded-t-full h-[900px]'
          />
          <div className='flex flex-col items-center bg-white py-2'>
            <p className='text-lg text-black font-medium leading-relaxed word-spacing-2 '>
              {desc}
            </p>
            <p className='text-lg text-black font-medium leading-relaxed word-spacing-2'>
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPhotos;
