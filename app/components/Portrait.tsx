'use client';
import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { SELF_IMGS } from '@/constants/self';
import { SelfImage } from '../types';

const Portrait = () => {
  const [current, setCurrent] = useState<number>(0);
  const length = SELF_IMGS.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className='card-wrapper w-[300px] h-[250px] sm:w-[254px] sm:h-[254px] lg:w-[308px] lg:h-[308px] xl:w-[410px] xl:h-[410px] bg-black rounded-xl cursor-pointer xl:mr-20 shadow-glow mb-2'
      onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
    >
      {SELF_IMGS.map((self: SelfImage, i: number) => {
        return (
          <div
            key={i}
            className={`${i === current ? '' : 'hidden'} mt-2 mr-8 w-[calc(100%-2px)] h-[calc(100%-2px)] absolute bottom-[17px] left-[1px] sm:bottom-[16px] sm:left-[2px] lg:bottom-[14px] lg:left-[4px] xl:bottom-[13px] xl:left-[5px]`}
          >
            <img
                src={self.src}
                alt={self.alt}
                className='animate-image-change rounded-xl mt-4 w-[298px] h-[248px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] object-cover'
              />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Portrait;
