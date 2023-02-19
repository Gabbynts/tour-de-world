import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function RenderCharacter() {
    const { systemTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
  
    useEffect(() => {
      setMounted(true);
    });
  
    if (!mounted) return null;
  
    if (currentTheme === 'dark') return (
        <div 
          className='relative pt-20 flex md:w-1/2 mb-5'
          data-aos="fade-up"
        >
          <Image
            src='/images/character-2.png'
            alt='character'
            width={1024}
            height={800}
            className='w-[800px] hover:drop-shadow-2xl cursor-pointer'
          />
        </div>
      );
     else return (
        <div 
          className='relative pt-20 flex md:w-1/2 mb-5'
          data-aos="fade-up"
        >
          <Image
            src='/images/character-1.png'
            alt='character'
            width={1024}
            height={800}
            className='w-[800px] hover:drop-shadow-2xl cursor-pointer'
          />
        </div>
      );
  }
  
  export default RenderCharacter;
  