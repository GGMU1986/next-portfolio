'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LinkImg from './LinkImg';
import LinkText from './LinkText';
import MobileNav from './MobileNav';
import Navigator from './Navigator';

import { IoDocumentText } from 'react-icons/io5';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <motion.div
      className={`sticky top-0 z-[11] w-screen h-[3.05rem] md:h-[4.5rem] lg:h-[6.1rem] flex justify-between justify-center items-center px-6 sm:px-20 ${
        scrollPosition > 10 ? 'bg-slate-600 shadow' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className='flex items-center justify-between'>
        <MobileNav />
        <LinkImg
          href='/'
          src='/favicon.ico'
          alt='Logo'
          className='w-[1.77rem] h-[1.77rem] md:w-[3.05rem] md:h-[3.05rem] lg:w-[4.2rem] lg:h-[4.2rem] rounded-full shadow-glow ml-2 lg:ml-0 mr-10'
        />
        <Navigator />
      </div>
      <div className='flex gap-5 sm:gap-10 cursor-pointer text-white items-center gap-small'>
        <Link
          href='/navbar/George_Tsimis_Resume.pdf'
          target='blank'
          className='text-[1rem]'
        >
          <IoDocumentText className='resume-icon-show resume-icon-hide' />
        </Link>
        <LinkText
          href='/navbar/George_Tsimis_Resume.pdf'
          text='RESUME'
          className='font-semibold text-[0.74rem] md:text-[1rem] lg:text-[1.25rem] font-white tracking-[2px] hover:text-amber-300 small-screen'
          target='_blank'
        />
        <LinkImg
          href='https://github.com/GGMU1986/next-portfolio'
          src='/navbar/github.png'
          alt='linkedin'
          className='shadow-glow rounded-full w-[1.77rem] h-[1.77rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[3.1rem] lg:h-[3.1rem] hover:hoverGlow'
          target='blank'
        />
        <LinkImg
          href='https://www.linkedin.com/in/george-tsimis-a5986224/'
          src='/navbar/linkedin.png'
          alt='linkedin'
          className='shadow-glow rounded-full w-[1.77rem] h-[1.77rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[3.1rem] lg:h-[3.1rem] hover:hoverGlow'
          target='blank'
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
