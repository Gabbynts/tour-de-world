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
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2] '
      }
                    flex items-center justify-center min-w-[170px] h-[680px] transition-[flex]
                    duration-[0.7s] ease-out-flex gap-x-2 my-1 pt-14`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        id={id}
        width={1040}
        height={700}
        className='absolute object-cover rounded-[24px] w-full h-full'
      />

      {active !== id ? (
        <div className='bg-black/50 absolute w-full h-full rounded-[24px] transition hover:bg-black/20 cursor-pointer '>
            <div className=' lg:-rotate-90 pr-10 flex items-center justify-center'>
              <h2 className='text-[20px] mt-5 ml-5 pr-5 font-semibold text-white '>{title}</h2>
            </div>
        </div>
      ) : (
        <div className='absolute bottom-0 bg-black/50 py-5 w-full h-1/3 lg:h-1/6 flex items-center'>
            <div className='pl-9 flex justify-between gap-x-[64px] sm:gap-x-[200px] transition-shadow'>
                <div className='flex bg-black/70 hover:bg-white/40 sm:w-full sm:p-2 rounded-2xl justify-center items-center  cursor-pointer'>
                    <Image
                        src='/headset.svg'
                        alt='Headset'
                        width={60}
                        height={20}
                        className='w-1/2 sm:w-full'
                    />
                </div>
                <h2 className='w-1/2 text-[24px] sm:text-[40px] font-light text-white'>{title}</h2>
            </div>
        </div>
      )}
    </motion.div>
  );
}

export default PhotoCard;
