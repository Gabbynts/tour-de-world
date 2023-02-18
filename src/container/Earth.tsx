import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { earth, fadeIn, staggerContainer } from '@/utils/motion';


function Earth() {
  return (
    <>
<div id='earth'>
          <div className='md:hidden'>
            <motion.div
              variants={earth('left')}
              className='flex relative z-20 justify-center sm:top-4'
            >
              <Image 
                src='/images/earth.png'
                alt='earth'
                width={755}
                height={670}
                className='drop-shadow-2xl transition duration-500 hover:scale-105 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-5/6'
              />
            </motion.div>
          </div>
          <div className='hidden md:block'>
            <motion.div
              variants={earth('right')}
              className='flex relative z-20 justify-center sm:top-4'
            >
              <Image
                src='/images/earth.png'
                alt='earth'
                width={755}
                height={670}
                className='drop-shadow-2xl transition duration-500 hover:scale-105 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-5/6'
              />
            </motion.div>
          </div>
        </div>
    </>
  )
}

export default Earth

