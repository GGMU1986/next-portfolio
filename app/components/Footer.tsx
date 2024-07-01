import React from 'react';

import { MdEmail } from 'react-icons/md';
import { FaPhone, FaMapMarked } from 'react-icons/fa';

const Footer = () => {
  const phone = {
    icon: FaPhone,
    alt: 'Phone',
    text: '(347) 739-6542',
  };

  const email = {
    icon: MdEmail,
    alt: 'Email',
    text: 'georgetsimis21@gmail.com',
  };

  const location = {
    icon: FaMapMarked,
    alt: 'Location',
    text: 'New York, NY',
  };

  return (
    <div className='mt-auto w-full h-[3.05rem] md:h-[3.75rem] lg:h-[3rem] text-[.6rem] md:text-[.70rem] lg:px-4 lg:text-[.95rem] bg-transparent flex flex-col justify-center xl:flex-row xl:items-center pl-4 xl:px-15 text-white xl:justify-between'>
      <div className='bg-black sm:bg-transparent'>
        &copy; {new Date().getFullYear()} Built by George Tsimis{' '}
        <span className='hidden md:inline'>-</span> <br className='md:hidden' />
        Next.js, TypeScript, Tailwind CSS, Framer Motion
      </div>
      <div className='flex xl:justify-around items-center gap-2 sm:gap-10'>
        <div className='flex items-center hover:text-amber-300 cursor-auto'>
          <location.icon />
          <p className='ml-1 sm:ml-2'>{location.text}</p>
        </div>
        <div className='flex items-center hover:text-amber-300 cursor-auto'>
          <phone.icon />
          <p className='ml-1 sm:ml-2'>{phone.text}</p>
        </div>
        <div className='flex items-center bg-transparent hover:text-amber-300 cursor-pointer bottom-0'>
          <email.icon />
          <p className='ml-1 sm:ml-2'>{email.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
