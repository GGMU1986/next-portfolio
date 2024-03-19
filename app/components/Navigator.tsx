'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import { NAV_LINKS } from '@/constants/navLinks';

const Navigator = () => {
  const path = usePathname();

  return (
    <div className='fixed flex flex-col bg-transparent gap-10 text-md sm:text-2xl left-4 top-[25%] sm:top-[12%] w-[3%] text-white justify-center items-center py-4 rounded-lg z-[11]'>
      {NAV_LINKS.map((nav, i) => {
        return (
          <Link key={i} href={nav.path}>
            <motion.div
              whileHover={{ scale: 1.4 }}
              className={`flex flex-col items-center ${path === nav.path ? 'text-amber-300' : ''}`}
            >
              <nav.icon 
                href={nav.path}
                className={`text-2xl`}
              />
              <p className='text-xs mt-1'>{nav.text}</p>
            </motion.div>
          </Link>
        )
      })}
    </div>
  )
}

export default Navigator;