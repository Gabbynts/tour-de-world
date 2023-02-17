import Image from "next/image";
import React from "react";

function Hero () {
    return (
        <section className='flex flex-col md:flex-row gap-5 items-center pb-3 md:pt-[50px] pt-28'>
          <div className='absolute gradient-02 z-0 md:-left-[100px] -left-[300px] -top-6'/>
            <div className='absolute -right-0 top-20'>
              <Image
                src='/images/plane.png'
                alt='Plane'
                width={178}
                height={121}
                className='drop-shadow-xl w-[70px] md:w-[190px]'/>
            </div>

            <div className='flex justify-center sm:top-4 transition duration-500 hover:scale-105'>

              <Image 
              src='/images/earth.png'
              alt='earth'
              width={755}
              height={670}
              className='drop-shadow-2xl transition duration-500 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-5/6'/>
            </div>

            <div className='flex flex-col md:gap-y-8 -mt-20 sm:py-5 md:full py-28 text-center md:pt-32'>
              <h1 className='text-[#3b2e27] text-[50px] font-semibold md:font-[700] md:text-[80px] drop-shadow-xl z-10 '>Tour De World</h1>
              <p className='text-[15px] md:text-[40px] z-10'>Experience the World <br /> One Adventure at a Time</p> 
            </div>
          </section>

    )
}

export default Hero