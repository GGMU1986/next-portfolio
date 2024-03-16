"use client"
import React, { useState } from 'react'

import { motion } from 'framer-motion';

import { SELF_IMGS } from '@/constants/self';

const Portrait = () => {
  const [current, setCurrent] = useState(0);
  const length = SELF_IMGS.length;

  return (
    <div>
      {SELF_IMGS.map((self, i) => {
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
                className='rounded-xl shadow-glow w-[70px] h-[70px] sm:w-[400px] sm:h-[400px] mr-10 cursor-pointer object-cover'
                onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)} 
              />
            ) : <></>}
          </motion.div>
        )
      })}
    </div>
  )
}

export default Portrait;