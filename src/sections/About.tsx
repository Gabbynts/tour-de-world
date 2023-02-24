import Steps from '@/components/Steps';
import Text from '@/components/Text';
import { stepsText } from '@/constant/photoWorlds';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import RenderGradientAbout from '@/container/GradientAbout';
import RenderCharacter from '@/container/RenderCharacter';

function About() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='about' className='bg-gradient-to-b from-[#D9D9D9] dark:from-[#5d4f6e] to-[#c59a82] rounded-tl-[700px]'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col md:flex-row gap-y-5 z-10 items-center justify-between layout'
      >
        <RenderGradientAbout />
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='items-center md:pl-48 text-start order-last md:order-first md:block'
        >
          <Text colorVariant='secondary' className='font-light mb-5 dark:text-[#E6D2FF]'>
            Get Started
          </Text>
          <div className='flex flex-col gap-y-3'>
            {stepsText.map((text, index) => (
              <Steps key={text} number={`${'0'} ${index + 1}`} text={text} />
            ))}
          </div>
        </motion.div>

        <RenderCharacter />
      </motion.div>
    </section>
  );
}

export default About;
