import React, { useState } from 'react'

import { useAnimationControls } from 'framer-motion';
import { motion } from 'framer-motion';

interface SpanTextProps {
  children: string
}

const SpanText: React.FC<SpanTextProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();
  const bouncingLetters = () => {
    controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.35, .62, 1)',
        'scale3d(.65, 1.28, 1)',
        'scale3d(1.2, .8, 1)',
        'scale3d(.88, 1.12, 1)',
        'scale3d(1, 1, 1)'
      ]
    })
    setIsPlaying(true);
  }

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => isPlaying ? null : bouncingLetters()}
      onAnimationComplete={() => setIsPlaying(false)}
      className='inline-block gap-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-cyan-500'
    >
      {children}
    </motion.span>
  )
}

export default SpanText;