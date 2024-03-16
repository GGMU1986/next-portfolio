"use client"
import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

interface LinkTextProps {
  href: string;
  text: string;
  className: string;
  target?: string;
}

const LinkText: React.FC<LinkTextProps> = ({ href, text, className, target }) => {
  return (
    <Link href={href} target={target} className={className}>
      <motion.p
        whileHover={{ 
          scale: 1.1,
          textShadow: '0px 0px 8px'
        }}
      >
        {text}
      </motion.p>
    </Link>
  )
}

export default LinkText;