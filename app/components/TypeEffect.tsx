'use client';
import { TypeAnimation } from 'react-type-animation';

const TypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Software Engineer',
        1500,
        'Problem Solver',
        1500,
        'Innately Curious',
        1500,
        'Team Player',
        1500,
      ]}
      speed={50}
      className='animate-pulse font-semibold text-[1.7rem] sm:text-[1.8rem] md:text-[2.5rem] mb-2 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500'
      repeat={Infinity}
    />
  );
};

export default TypeEffect;
