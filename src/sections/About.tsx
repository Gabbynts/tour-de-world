import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section className='bg-gradient-to-b from-[#D9D9D9] to-[#DFAE93] rounded-tl-[700px] z-10'>
      <div className='hidden sm:block gradient-02 z-0 relative overflow-hidden right-0 -bottom-[500px]' />
      <div className='relative pt-20 flex justify-end'>
        <Image
          src='/images/character-1.png'
          alt='character'
          width={1024}
          height={800}
          className='w-[800px] hover:drop-shadow-2xl cursor-pointer'
        />
      </div>
    </section>
  );
}

export default About;
