'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_LINKS } from '@/constants/navLinks';
import ToolTip from './ToolTip';

const Navigator = () => {
  const path = usePathname();

  return (
    <div className='flex flex-col border bg-transparent gap-10 absolute text-lg right-2 top-[50%] w-[3%] text-white justify-center items-center py-4 rounded-lg'>
      {NAV_LINKS.map((nav, i) => {
        return (
          <Link href={nav.path}>
            <ToolTip text={nav.text} className={`${path === nav.path ? 'text-amber-300' : ''} right-[170%] -top-[90%] font-semibold`}>
              <nav.icon 
                key={i}
                href={nav.path}
                className={`text-lg ${path === nav.path ? 'text-amber-300' : ''}`}
              />
            </ToolTip>
          </Link>
        )
      })}
    </div>
  )
}

export default Navigator;