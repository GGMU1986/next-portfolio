import React, { useState } from 'react'
import Link from 'next/link';

import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from 'react-icons/gr';
import { NAV_LINKS } from '@/constants/navLinks';

const MobileNav = () => {
  const [mobileSlider, setMobileSlider] = useState(false);

  return (
    <>
      <div className='block lg:hidden'>
        <RxHamburgerMenu
          size={25} 
          className='cursor-pointer text-white mr-2' 
          onClick={() => setMobileSlider(true)}
        /> 
      </div>
      <div className={`absolute lg:hidden top-0 ${mobileSlider ? 'left-0' : 'left-[-100%]'} right-0 bottom-0 w-full h-screen flex flex-col justify-center items-center text-center text-white bg-black text-center ease-in duration-300 z-[20]`}>
        <GrClose 
          size={25} 
          className='absolute top-4 right-4 cursor-pointer' 
          onClick={() => setMobileSlider(false)} 
        />
        {NAV_LINKS.map((nav, i) => {
          return (
            <Link key={i} href={nav.path}>
              <div className='flex flex-col items-center justify-center text-3xl'>
                <p 
                  onClick={() => setMobileSlider(false)}  
                  className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500 lg:mt-10 mt-4'
                >
                  {nav.text}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  )
}

export default MobileNav;