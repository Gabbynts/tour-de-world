import Image from 'next/image';
import React from 'react';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import Text from '../Text';

const footerLinks = [
  {href: 'https://github.com/Gabbynts', icons: <AiFillGithub />},
  {href: 'https://www.linkedin.com/in/gabriella-natasya-209021253/', icons: <AiOutlineLinkedin />},
  {href: 'https://www.instagram.com/gabriella.natasya/', icons: <AiOutlineInstagram />}
]

function Footer() {
  return (
    <footer className='p-4 rounded-t-2xl shadow md:px-6 md:py-5 dark:bg-[#E6D2FF] bg-white/75'>
      <div className='flex items-center justify-between'>
        <Image
          src='/images/TourdeWorld.png'
          alt='TDW Logo'
          width={100}
          height={8}
        />
        <ul className='flex items-center text-sm sm:mb-0 text-gray-400 lg:gap-x-3 gap-x-1'>
          {footerLinks.map(({href, icons}) => (
            <li key={`${href}${icons}`} className='hover:text-gray-600'>
              <a href={`${href}`} className=" text-[30px]">{icons}</a>
            </li>
          ))}
        </ul>
      </div>
      <hr className='my-6 sm:mx-auto border-gray-700 lg:my-8' />
      <Text colorVariant='dark' className='block !text-sm sm:text-center'>
        Gabriella™. All Rights Reserved.
      </Text>
    </footer>
  );
}

export default Footer;
