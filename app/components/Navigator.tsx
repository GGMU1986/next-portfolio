'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_LINKS } from '@/constants/navLinks';

const Navigator = () => {
  const path = usePathname();

  return (
    <div className='absolute flex flex-col bg-transparent gap-10 text-md sm:text-lg  right-2 top-[25%] sm:top-[50%] w-[3%] text-white justify-center items-center py-4 rounded-lg z-[100]'>
      {NAV_LINKS.map((nav, i) => {
        return (
          <Link href={nav.path}>
            <nav.icon 
              key={i}
              href={nav.path}
              className={`text-lg ${path === nav.path ? 'text-amber-300' : ''}`}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default Navigator;