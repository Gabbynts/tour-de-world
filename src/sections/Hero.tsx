import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import Earth from '@/container/RenderEarth';
import Text from '@/components/Text';
import RenderPlane from '@/container/RenderPlane';
import RenderGradient from '@/container/GradientHero';

function Hero() {
  return (
    <section id='hero'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='md:min-h-screen flex flex-col md:flex-row gap-5 items-center pb-3 md:pt-[50px] pt-28'
      >
        <RenderGradient />
        <RenderPlane />
        <Earth />
        <div className='flex flex-col relative z-10 md:gap-y-8 -mt-20 sm:py-5 md:full py-28 md:px-7 text-center md:top-20 rounded-3xl
                       md:bg-[#c59a82]/10 md:shadow-[0_15px_15px_15px_rgba(0,0,0,0.3)] transition duration-500 hover:scale-105'>
          <Text colorVariant='primary' sizeVariant='h' className='drop-shadow-xl z-10 dark:text-[#E6D2FF]'>
            Tour De World
          </Text>
          <Text colorVariant='secondary' sizeVariant='b' className='z-10 dark:text-[#FFFFFF]'>
            Experience the World <br /> One Adventure at a Time
          </Text>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
