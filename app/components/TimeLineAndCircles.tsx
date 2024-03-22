import React from 'react';

// Map this after figuring out tailwind bug
const TimeLineAndCircles = () => {
  return (
    <div className='w-1 h-[120rem] sm:h-[100rem] lg:h-[120rem] bg-black rounded relative left-[50%]'>
      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[10%] sm:top-[10%] lg:top-[10%]' />
      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[20%] sm:top-[17%] lg:top-[20%]' />
      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[30%] sm:top-[25%] lg:top-[30%]' />
      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[40%] sm:top-[33%] lg:top-[40%]' />
      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[50%] sm:top-[41%] lg:top-[50%]' />
      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[60%] sm:top-[49%] lg:top-[60%]' />
      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[70%] sm:top-[57%] lg:top-[70%]' />
      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[80%] sm:top-[65%] lg:top-[80%]' />
    </div>
  );
};

export default TimeLineAndCircles;
