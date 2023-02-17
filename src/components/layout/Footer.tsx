import Image from 'next/image';
import React from 'react';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'

const footerLinks = [
  {href: 'https://github.com/Gabbynts', icons: <AiFillGithub />},
  {href: 'https://www.linkedin.com/in/gabriella-natasya-209021253/', icons: <AiOutlineLinkedin />},
  {href: 'https://www.instagram.com/gabriella.natasya/', icons: <AiOutlineInstagram />}
]

function Footer() {
  return (
    <footer className='p-4 rounded-t-2xl shadow md:px-6 md:py-8 bg-white/75'>
      <div className='flex items-center justify-between'>
        <Image
          src='/images/TourdeWorld.png'
          alt='TDW Logo'
          width={100}
          height={8}
        />
        <ul className='flex items-center text-sm sm:mb-0 text-gray-400 lg:gap-x-3 gap-x-1'>
          {footerLinks.map(({href, icons}) => (
            <li className='hover:text-gray-600'>
              <a href={`${href}`} className=" text-[30px]">{icons}</a>
            </li>
          ))}
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        Gabriella™. All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
