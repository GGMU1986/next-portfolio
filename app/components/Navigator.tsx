'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_LINKS } from '@/constants/navLinks';

const Navigator = () => {
  const path = usePathname();

  return (
    <div className='hidden lg:flex lg:text-2xl md:gap-6 font-mono tracking-[.1rem] lg:gap-10 text-white justify-center items-center lg:ml-0 lg:mr-10'>
      {NAV_LINKS.map((nav, i) => {
        return (
          <Link key={i} href={nav.path} className='nav relative'>
            <div
              className={`flex flex-col items-center ${
                path === nav.path ? 'text-amber-300' : ''
              }`}
            >
              <nav.icon href={nav.path} className={`text-2xl`} />
              <p className='text-sm mt-1'>{nav.text}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Navigator;
