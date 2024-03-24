'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LinkImgProps {
  href: string;
  src: string;
  alt: string;
  className: string;
  target?: string;
}

const LinkImg: React.FC<LinkImgProps> = ({
  href,
  src,
  alt,
  className,
  target,
}) => {
  return (
    <Link href={href} target={target}>
      <motion.img
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        src={src}
        alt={alt}
        className={className}
      />
    </Link>
  );
};

export default LinkImg;
