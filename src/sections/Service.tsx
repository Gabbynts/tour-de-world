import PhotoCard from '@/components/PhotoCard';
import { photoWorlds } from '@/constant/photoWorlds';
import { staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Service() {
  const [active, setActive] = useState('1');

  return (
    <section className='pt-7 min-h-screen mx-auto flex flex-col justify-center'>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className='flex justify-center w-full md:justify-start pr-5 -mt-5 py-3 pl-3'>
            <h2 className='text-[#000000] font-bold text-[24px] md:text-[50px] font-serif z-10'>
            Choose Your World
            </h2>
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
