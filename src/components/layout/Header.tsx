import Image from 'next/image'
import React from 'react'

const navLinks = [
    {section:'/', label: 'Home'},
    {section:'/', label: 'About'},
    {section:'/', label: 'Service'},
    {section:'/', label: 'Contact'}
]

function Header() {
  return (
    <header className='bg-white flex justify-between h-[83px] fixed w-full z-20'>
        <nav>
            <div className='flex items-center'>
            <Image 
              src='/images/TourdeWorld.png'
              alt='logo'
              width={177}
              height={70}
              className='relative left-3'
              />
          </div>
          <div className='flex items-center'>
            <ul className='flex gap-x-11 text-[20px] text-primary-300 relative right-7'>
              {navLinks.map((section, label) => (
                <li key={`${section}${label}`}>
                    <a href={`${section}`} >{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
    </header>
  )
}

export default Header