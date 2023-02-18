import Text from '@/components/Text';
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section
      id=''
      className=' flex bg-gradient-to-b from-[#D9D9D9] to-[#c59a82] rounded-tl-[700px] z-10 items-center w-full'
    >
      <div className='hidden sm:block gradient-02 z-0 overflow-hidden right-0 -bottom-[500px]' />
      <Text colorVariant='secondary' className='w-1/2 pl-32 font-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, obcaecati voluptat</Text>

      <div className='relative pt-20 flex w-1/2'>
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
