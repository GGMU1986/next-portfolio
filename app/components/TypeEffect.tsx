"use client"
import { TypeAnimation } from 'react-type-animation';

const TypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        1500,
        'Problem Solver',
        1500,
        'Compassionate Teammate',
        1500,
        'Thoughtful Communicator',
        1500,
        'Lifelong Learner',
        1500
      ]}
      speed={50}
      className='animate-pulse font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500'
      repeat={Infinity}
    />
  );
};

export default TypeEffect;