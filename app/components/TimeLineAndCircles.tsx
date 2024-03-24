import { TIMELINE_IMGS } from '../../constants/timeline';
import React from 'react';

// Map this after figuring out tailwind bug
const TimeLineAndCircles = () => {
  return (
    <>
      <div className='w-1 h-[120rem] sm:h-[75rem] md:h-[75rem] lg:h-[95rem] bg-black rounded relative left-[50%]' />{' '}
      <img
        src='/timelinePics/aspen.jpeg'
        alt='Aspen'
        className='absolute w-[50px] h-[50px] left-[44%] sm:left-[46.5%] md:left-[47%] lg:left-[47.75%] xl:left-[48.25%] 2xl:left-[48.75%] rounded-2xl top-[9%] sm:top-[3.5%] lg:top-[4%]'
      />
      <img
        src='/timelinePics/lynx.png'
        alt='Lynx'
        className='absolute w-[50px] h-[50px] left-[44%] sm:left-[46.5%] md:left-[47%] lg:left-[47.75%] xl:left-[48.25%] 2xl:left-[48.75%] rounded-2xl top-[21%] sm:top-[14.5%] lg:top-[16%]'
      />
      <img
        src='/timelinePics/aa.png'
        alt='AA'
        className='absolute w-[50px] h-[50px] left-[44%] sm:left-[46.5%] md:left-[47%] lg:left-[47.75%] xl:left-[48.25%] 2xl:left-[48.75%] rounded-2xl top-[33%] sm:top-[25.5%] lg:top-[28%]'
      />
      <img
        src='/timelinePics/QC.png'
        alt='QC'
        className='absolute w-[50px] h-[50px] left-[44%] sm:left-[46.5%] md:left-[47%] lg:left-[47.75%] xl:left-[48.25%] 2xl:left-[48.75%] rounded-2xl top-[45%] sm:top-[36.5%] lg:top-[40%]'
      />
      <img
        src='/timelinePics/moodys.png'
        alt='Moodys'
        className='absolute w-[50px] h-[50px] left-[44%] sm:left-[46.5%] md:left-[47%] lg:left-[47.75%] xl:left-[48.25%] 2xl:left-[48.75%] rounded-2xl top-[57%] sm:top-[47.5%] lg:top-[52%]'
      />
      <img
        src='/timelinePics/pwc.png'
        alt='PWC'
        className='absolute w-[50px] h-[50px] left-[44%] sm:left-[46.5%] md:left-[47%] lg:left-[47.75%] xl:left-[48.25%] 2xl:left-[48.75%] rounded-2xl top-[69%] sm:top-[58.5%] lg:top-[64%]'
      />
      <img
        src='/timelinePics/cuny.png'
        alt='QC'
        className='absolute md:left-[47%] left-[44%] sm:left-[46.5%] lg:left-[47.75%] xl:left-[48.25%] 2xl:left-[48.75%] top-[81%] sm:top-[69.5%] lg:top-[76%] w-[50px] h-[50px] rounded-2xl'
      />
      <img
        src='/timelinePics/QC.png'
        alt='QC'
        className='absolute top-[80%] left-[44%] sm:left-[46.5%] md:left-[47%] top-[93%] lg:left-[47.75%] xl:left-[48.25%] 2xl:left-[48.75%] sm:top-[80.5%] lg:top-[88%] w-[50px] h-[50px] rounded-2xl'
      />
    </>
  );
};

export default TimeLineAndCircles;
