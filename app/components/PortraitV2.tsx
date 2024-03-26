'use client';
import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { SELF_IMGS } from '@/constants/self';
import { SelfImage } from '../types';

const Portrait = () => {
  const [current, setCurrent] = useState(0);
  const length = SELF_IMGS.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
      className='card-wrapper w-[152px] h-[152px] sm:w-[254px] sm:h-[254px] lg:w-[308px] lg:h-[308px] xl:w-[410px] xl:h-[410px] bg-black rounded-xl cursor-pointer'
      onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
    >
      {SELF_IMGS.map((self: SelfImage, i: number) => {
        return (
          <div
            key={i}
            className='mt-2 mr-8 w-[calc(100%-2px)] h-[calc(100%-2px)] absolute bottom-[13px] left-[5px]'
          >
            {i === current ? (
              <img
                src={self.src}
                alt={self.alt}
                className='rounded-xl shadow-glow mt-4 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] xl:mr-10 object-cover'
                // onClick={() =>
                //   setCurrent(current === length - 1 ? 0 : current + 1)
                // }
              />
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

export default Portrait;
