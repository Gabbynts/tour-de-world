import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import Text from '../Typography';

const footerLinks = [
  {href: 'https://github.com/Gabbynts', icons: <AiFillGithub />},
  {href: 'https://www.linkedin.com/in/gabriella-natasya-209021253/', icons: <AiOutlineLinkedin />},
  {href: 'https://www.instagram.com/gabriella.natasya/', icons: <AiOutlineInstagram />}
]

function Footer() {
  return (
    <footer className='p-4 rounded-t-2xl shadow md:px-6 md:py-5 dark:bg-[#FFF6FF] bg-[#fdfdfd]'>
      <div className='flex layout items-center justify-between'>
        <Link href='/'>
          <Image
            src='/images/TourdeWorld.png'
            alt='TDW Logo'
            width={100}
            height={8}
            className='cursor-pointer'
          />
        </Link>
        
        <ul className='flex items-center text-sm sm:mb-0 text-gray-400 lg:gap-x-3 gap-x-1'>
          {footerLinks.map(({href, icons}) => (
            <li key={`${href}${icons}`} className='hover:text-gray-600'>
              <a href={`${href}`} className=" text-[30px]">{icons}</a>
            </li>
          ))}
        </ul>
      </div>
      <hr className='my-6 layout sm:mx-auto border-gray-700 lg:my-8' />
      <Text colorVariant='secondary' className='block layout !text-sm sm:text-center'>
        Gabriella™. All Rights Reserved.
      </Text>
    </footer>
  );
}

export default Footer;
