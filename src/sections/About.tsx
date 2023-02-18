import Steps from '@/components/Steps';
import Text from '@/components/Text';
import { stepsText } from '@/constant/photoWorlds';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section id='about'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col md:flex-row bg-gradient-to-b from-[#D9D9D9] to-[#c59a82] rounded-tl-[700px] z-10 items-center w-full'
      >
        <div className='hidden sm:block gradient-02 z-0 overflow-hidden right-0 -bottom-[500px]' />
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='w-1/2 pl-48 text-start hidden md:block'
        >
          <Text colorVariant='secondary' className='font-light'>
            Get Started
          </Text>
          <div className='flex flex-col gap-y-3'>
            {stepsText.map((text, index) => (
              <Steps key={text} number={`${'0'} ${index + 1}`} text={text} />
            ))}
          </div>
        </motion.div>

        <div className='relative pt-20 flex md:w-1/2 '>
          <Image
            src='/images/character-1.png'
            alt='character'
            width={1024}
            height={800}
            className='w-[800px] hover:drop-shadow-2xl cursor-pointer'
          />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
