import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import { useTheme } from 'next-themes';

function RenderPlane() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) return null;

  if (currentTheme === 'dark') return (
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='fixed -right-0 top-24 cursor-pointer z-30'
      >
        <Image
          src='/images/balloon.png'
          alt='Plane'
          width={160}
          height={121}
          className='drop-shadow-xl w-[70px] md:w-[180px] transition duration-500 hover:scale-105'
          onClick={() => setTheme('light')}
        />
      </motion.div>
    );
   else return (
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='fixed -right-0 top-20 cursor-pointer'
      >
        <Image
          src='/images/plane.png'
          alt='Plane'
          width={178}
          height={121}
          className='drop-shadow-xl w-[70px] md:w-[190px] transition duration-500 hover:scale-105'
          onClick={() => setTheme('dark')}
        />
      </motion.div>
    );
}

export default RenderPlane;
