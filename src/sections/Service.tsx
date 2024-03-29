import PhotoCard from '@/components/PhotoCard';
import Text from '@/components/Typography';
import { photoWorlds } from '@/constant/photoWorldsDark';
import { staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Service() {
  const [active, setActive] = useState('1');

  return (
    <section data-testid="service" id='service' className='layout pt-12 pb-4 min-h-screen mx-auto flex flex-col justify-center'>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className='flex justify-center w-full md:justify-start pr-5 -mt-5 pl-3'>
            <Text sizeVariant='h' colorVariant='primary' className='z-10 hover:drop-shadow-2xl dark:text-[#E6D2FF]'>
            Choose Your World
            </Text>
        </div>
        <div className='flex flex-col lg:flex-row gap-x-5 min-h-[70vh] px-5 md:pb-10 pb-3'>
        {photoWorlds.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            index={index}
            active={active}
            handleClick={setActive}
            {...photo}
          />
        ))}
      </div>
      
      </motion.div>
      
    </section>
  );
}

export default Service;
