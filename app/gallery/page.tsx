'use client';
import React, { useState } from 'react';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { PICS } from '../../constants/pics';
import Headline from '../components/Headline';

const page = () => {
  const [current, setCurrent] = useState(0);
  const length = PICS.length;

  return (
    <div className='flex flex-col items-center'>
      <Headline
        headline='Gallery'
        className='text-[24px] sm:text-[60px] mt-[6%]'
      />
      <div>
        {PICS.map((pic, i) => {
          return (
            <div
              className={
                i === current
                  ? 'opacity-[1] easein duration-1000 relative'
                  : 'opacity-0'
              }
              key={i}
            >
              {i === current ? (
                <>
                  <p className='sm:invisible visible text-white z-[100] text-center text-[15px]'>
                    {pic.title} - {pic.time}
                  </p>
                  <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30'>
                    <div className='absolute inset-0 bg-gradient-to-b group-hover:from-slate-600/70 group-hover:via-slate-600/60 group-hover:to-slate-600/70'></div>
                    <img
                      src={pic.path}
                      alt={pic.title}
                      className='object-scale-down w-[400px] h-[200px] sm:w-[800px] sm:h-[600px]'
                    />
                    <div className='absolute invisible sm:visible inset-0 flex text-amber-300 translate-y-[70%] gap-6 flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0'>
                      <p className='text-[10px] sm:text-3xl font-bold mb-16 sm:mb-0'>
                        {pic.title}
                      </p>
                      <p className='text-[10px] sm:text-2xl font-bold mb-16 sm:mb-0'>
                        {pic.time}
                      </p>
                      <p className='text-[10px] sm:text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-semibold'>
                        {pic.text}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              <FaArrowCircleLeft
                onClick={() =>
                  setCurrent(current === 0 ? length - 1 : current - 1)
                }
                className='
                    absolute bottom-[40%] sm:bottom-[47%] left-[6%] sm:-left-[15%] text-[24px] sm:text-[40px] text-white/70 cursor-pointer select-none z-[2]
                  '
              />
              <FaArrowCircleRight
                onClick={() =>
                  setCurrent(current === length - 1 ? 0 : current + 1)
                }
                className='
                    absolute bottom-[40%] sm:bottom-[47%] right-[7%] sm:left-[110%] text-[24px] sm:text-[40px] text-white/70 cursor-pointer select-none z-[2]
                  '
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
