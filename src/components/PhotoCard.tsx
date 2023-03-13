import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '@/utils/motion';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Typography from './Typography';

interface Props {
  id: string;
  imgUrl: string;
  title: string;
  link: string;
  index: number;
  active: string;
  handleClick: (event: string) => void;
}

function PhotoCard({
  id,
  link,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: Props) {
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
          <div className=' lg:-rotate-90 md:pr-20 flex items-center justify-center'>
            <Typography sizeVariant='s' colorVariant='light' className='mt-5 ml-5 pr-5'>{title}</Typography>
          </div>
        </div>
      ) : (
        <div className='absolute bottom-0 bg-black/50 py-5 w-full h-1/3 lg:h-1/6 flex justify-center items-center hover:bg-white/0 transition duration-500'>
          <Link href={link} className='flex items-center text-center'>
              <Typography sizeVariant='c' colorVariant='light'>{title}</Typography>
              <div className='cursor-pointer px-3'>
              {/* <Image
                src='/images/Saly-43.jpg'
                alt='icon'
                width={100}
                height={100}/> */}
                <AiOutlineArrowRight className='text-[20px] md:text-[30px] bounce text-white'/>
                {/* <Image
                        src='/headset.svg'
                        alt='Headset'
                        width={60}
                        height={20}
                        className=' sm:w-full'
                    /> */}
              </div>
            </Link>
        </div>
      )}
    </motion.div>
  );
}

export default PhotoCard;
