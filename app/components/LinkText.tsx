'use client';
import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

interface LinkTextProps {
  href: string;
  text: string;
  className: string;
  target?: string;
}

const LinkText: React.FC<LinkTextProps> = ({
  href,
  text,
  className,
  target,
}) => {
  return (
    <Link href={href} target={target} className={className}>
      <div className='group hover:translate-y-3 transition-all duration-500 flex flex-col items-center'>
        <img className='cursor-pointer rounded-full w-[50px] h-[50px] lg:w-[50px] lg:h-[50px]' src='/navbar/resume.webp' alt='RESUME' />
        <span className='absolute opacity-0 group-hover:bg-blue-900 p-2 text-sm rounded-lg text-center group-hover:text-white group-hover:opacity-100 group-hover:-translate-y-4 duration-700'>
          {text}
        </span>
      </div>
    </Link>
  );
};

export default LinkText;
