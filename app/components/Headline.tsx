'use client';
import React from 'react';

import { motion } from 'framer-motion';

interface HeadlineProps {
  headline: string;
  className?: string;
}

const Headline: React.FC<HeadlineProps> = ({ headline, className }) => {
  return (
    <motion.div
      className={`animate-pulse font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500 ${className}`}
      initial={{ x: -1200 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: '120' }}
    >
      {headline}
    </motion.div>
  );
};

export default Headline;
