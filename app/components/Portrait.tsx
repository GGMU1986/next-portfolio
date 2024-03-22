'use client';
import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { SELF_IMGS } from '@/constants/self';
import { SelfImage } from '../types';

const Portrait = () => {
  const [current, setCurrent] = useState(0);
  const length = SELF_IMGS.length;

  return (
    <div>
      {SELF_IMGS.map((self: SelfImage, i: number) => {
        return (
          <motion.div
            key={i}
            className='mt-2 mr-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            {i === current ? (
              <img
                src={self.src}
                alt={self.alt}
                className='rounded-xl shadow-glow mt-4 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] xl:mr-10 cursor-pointer object-cover'
                onClick={() =>
                  setCurrent(current === length - 1 ? 0 : current + 1)
                }
              />
            ) : (
              <></>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Portrait;
