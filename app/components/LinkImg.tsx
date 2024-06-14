'use client';
import React from 'react';
import Link from 'next/link';

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
      <img
        src={src}
        alt={alt}
        className={`transition duration-700 hover:rotate-[360deg] hover:scale-110 ${className}`}
      />
    </Link>
  );
};

export default LinkImg;
