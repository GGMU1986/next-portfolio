'use client'
import React from 'react'

import { motion } from 'framer-motion';
import LinkImg from './LinkImg';
import LinkText from './LinkText';

const Navbar = () => {
  return (
    <motion.div 
      className="fixed top-0 z-[40] w-full h-[50px] sm:h-[100px] bg-transparent flex justify-between justify-center gap-2 items-center px-10 sm:px-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <LinkImg 
        href='/'
        src='/favicon.ico'
        alt='Logo'
        className='w-[30px] h-[30px] sm:w-[70px] sm:h-[70px] rounded-full shadow-glow'
      />
      <div className="flex gap-10 cursor-pointer text-white items-center">
        <LinkText 
          href='/George_Tsimis_Resume.pdf'
          text='RESUME'
          className='font-semibold text-[10px] md:text-xl font-white tracking-[2px]'
          target='_blank'
        />
        <LinkImg 
          href='https://www.linkedin.com/in/george-tsimis-a5986224/'
          src='/linkedin.png'
          alt='linkedin'
          className='shadow-glow rounded-full w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] hover:hoverGlow'
          target='blank'
        />
      </div>
    </motion.div>
  )
}

export default Navbar;