import React from 'react';

import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaPhone, FaMapMarked } from "react-icons/fa";
import ToolTip from './ToolTip';

const Footer = () => {
  const phone = {
    icon: FaPhone,
    alt: 'Phone',
    text: '(347) 739-6542'
  }

  const email = {
    icon: MdEmail,
    alt: 'Email',
    text: 'gt2186@gmail.com'
  }

  const location = {
    icon: FaMapMarked,
    alt: 'Location',
    text: 'New York, NY'
  }
  
  return (
    <div className='fixed invisible sm:visible flex-col sm:flex-row sm:justify-between text-white bottom-0 z-[40] w-full h-[50px] sm:h-[80px] bg-transparent sm:flex sm:justify-between items-center pl-4 sm:px-15'>
      <div className='text-[8px] sm:text-sm'>
        &copy; {new Date().getFullYear()} Built by George Tsimis - Next.js, TypeScript, Tailwind CSS
      </div>
      <div className='flex sm:justify-around items-center text-[8px] sm:px-4 sm:text-xl gap-2 sm:gap-10'>
        <div className='flex items-center hover:text-amber-300 cursor-auto'>
          <location.icon />
          <p className='ml-1 sm:ml-2'>{location.text}</p> 
        </div>
        <div className='flex items-center hover:text-amber-300 cursor-auto'>
          <phone.icon />
          <p className='ml-1 sm:ml-2'>{phone.text}</p> 
        </div>
        <ToolTip 
          toolTip='Click to send an email!'
          className='text-amber-300 text-[10px] sm:text-lg mb-2'
        >
        <Link href='mailto: gt2186@gmail.com'>
          <div className='flex items-center hover:text-amber-300 cursor-pointer'>
            <email.icon />
            <p className='ml-1 sm:ml-2'>{email.text}</p> 
          </div>
        </Link>
        </ToolTip>
      </div>
    </div>
  )
}

export default Footer;