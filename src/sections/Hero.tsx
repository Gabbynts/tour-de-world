import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { earth, fadeIn, staggerContainer } from '@/utils/motion';
import Earth from '@/container/Earth';
import Text from '@/components/Text';

function Hero() {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='md:min-h-screen flex flex-col md:flex-row gap-5 items-center pb-3 md:pt-[50px] pt-28'
      >
        <div className='absolute gradient-02 z-0 md:-left-[100px] -left-[300px] -top-6' />
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='absolute -right-0 top-20'
        >
          <Image
            src='/images/plane.png'
            alt='Plane'
            width={178}
            height={121}
            className='drop-shadow-xl w-[70px] md:w-[190px]'
          />
        </motion.div>
        
        <Earth />
        <div className='flex flex-col relative z-10 md:gap-y-8 -mt-20 sm:py-5 md:full py-28 md:px-7 text-center md:top-20 rounded-3xl md:bg-[#c59a82]/10 md:shadow-[0_15px_15px_15px_rgba(0,0,0,0.3)] transition duration-500 hover:scale-105'>
          <Text colorVariant='primary' sizeVariant='h' className='drop-shadow-xl z-10'>
            Tour De World
          </Text>
          <Text colorVariant='secondary' sizeVariant='b' className='z-10'>
            Experience the World <br /> One Adventure at a Time
          </Text>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
