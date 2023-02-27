import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const navLinks = [
  { section: '/#hero', label: 'Home' },
  { section: '/#about', label: 'About' },
  { section: '/#service', label: 'Service' },
  { section: '/', label: 'Contact' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleShowNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed dark:bg-[#E6D2FF] bg-white w-full z-30'>
      <div className='layout flex justify-between'>
        <div className='flex items-center mb-1'>
          <Link href='/'>
            <Image
              src='/images/TourdeWorld.png'
              alt='logo'
              width={177}
              height={70}
              className='relative left-3 mt-3'
            />
          </Link>
        </div>
        <nav className='hidden md:flex items-center'>
          <ul className='hidden relative md:flex gap-x-11 text-[20px] font-semibold right-7'>
            {navLinks.map(({ section, label }) => (
              <li key={`${section}${label}`}>
                <a
                  href={section}
                  className=' hover:text-[#3b2e27] hover:drop-shadow dark:text-[#534137] text-[#DFAE93]'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='relative z-50 mr-3 mt-5 flex md:hidden'>
          {!isOpen && (
            <GiHamburgerMenu
              className='text-3xl text-gray-900'
              onClick={toggleShowNav}
            />
          )}
        </div>
        <div
          className={`flex translate-y-[calc(100%-4rem)] md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full opacity-0'
          } absolute left-0 min-h-screen w-full flex-col bg-[#DFAE93] transition duration-300 bottom-2`}
        >
          <nav className='relative z-20 flex h-screen w-full flex-col'>
            <ul>
              <div className='flex justify-center items-center pb-5 bg-white'>
                <Image
                  src='/images/TourdeWorld.png'
                  alt='logo'
                  width={177}
                  height={70}
                  className='relative left-3'
                />
              </div>
              {navLinks.map(({ section, label }) => (
                <li key={`${section}${label}`} className='py-3 px-7'>
                  <a
                    href={section}
                    className='flex w-full items-center justify-center font-semibold hover:text-black text-[#3b2e27]'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            {isOpen && (
              <FaTimes
                className='absolute bottom-20 right-1/2 mx-auto h-12 w-12 translate-x-1/2 rounded-full border-[2px] bg-white p-3 text-3xl font-thin text-[#DFAE93]'
                onClick={toggleShowNav}
              />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
