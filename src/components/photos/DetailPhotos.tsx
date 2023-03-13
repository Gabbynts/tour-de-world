import React from 'react';
import Image from 'next/image';
import Typography from '../Typography';

interface Props {
  name: string | undefined;
  image: string | undefined;
  desc: string | undefined;
  date: string | undefined;
}

function DetailPhotos({ name, image, desc, date }: Props) {
  return (
    <>
      <div className='relative flex items-center layout justify-center'>
        <Image
          src='/images/Saly-43.jpg'
          alt='icon'
          width={300}
          height={100}
          className='absolute -left-[5px] top-40 -rotate-12 -z-20'/>
        <div className='absolute p-5 uppercase text-[200px] font-semibold text-white text-center -z-10 top-24'>
          <p>{name}</p>
        </div>
        <div className='flex flex-col items-center'>
          <Typography
            sizeVariant='h'
            colorVariant='primary'
            className='font-body pt-3 pb-7'
          >
            {name}
          </Typography>
          <img
            src={image}
            alt={desc}
            className='w-[700px] rounded-t-full h-[850px]'
          />
          <div className='flex flex-col items-center bg-[#FCF7FF] py-4 w-full'>
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
