import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '@/utils/motion';

interface Props {
  id: string;
  imgUrl: string;
  title: string;
  index: any;
  active: any;
  handleClick: any;
}

function PhotoCard({ id, imgUrl, title, index, active, handleClick }: Props) {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      }
                    flex items-center justify-center min-w-[170px] h-[680px] transition-[flex]
                    duration-[0.7s] ease-out-flex cursor-pointer gap-x-2 pt-14`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        id={id}
        width={1040}
        height={700}
        className='object-cover rounded-[24px] w-full h-full'
      />

      {active !== id ? (
        <div className='bg-black/50 absolute w-full h-[625px] rounded-[24px]'>
          <div className='-rotate-90'>
            <h2 className='text-[20px] font-semibold text-white'>{title}</h2>
          </div>
        </div>
      ) : (
        <div className='absolute bottom-0 rounded-b-[24px] bg-black/50 w-full h-1/6 flex justify-center items-center'>
          <h2 className='text-[40px] font-light text-white'>{title}</h2>
        </div>
      )}
    </motion.div>
  );
}

export default PhotoCard;
