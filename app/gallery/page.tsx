'use client';
import React, { useState } from 'react';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { PICS } from '../../constants/pics';
import Headline from '../components/Headline';

const Gallery = () => {
  const [current, setCurrent] = useState<number>(0);
  const length = PICS.length;

  return (
    <div className='flex flex-col items-center justify-center'>
      <Headline
        headline='Gallery'
        className='text-[1.5rem] lg:text-[2.5rem] xl:text-[3.75rem]'
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
                  <p className='xl:hidden text-white z-[100] text-center text-[1rem]'>
                    {pic.title} - {pic.time}
                  </p>
                  <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30'>
                    <img
                      src={pic.path}
                      alt={pic.title}
                      className='object-scale-down w-[400px] h-[200px] lg:w-[600px] lg:h-[400px] xl:w-[800px] xl:h-[600px]'
                    />
                    <div className='absolute hidden xl:block inset-0 flex text-amber-300 translate-y-[100%] gap-6 flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-[22rem]'>
                      <p className='xl:text-3xl font-bold mb-16 sm:mb-0'>
                        {pic.title}
                      </p>
                      <p className='xl:text-2xl font-bold mb-16 sm:mb-0'>
                        {pic.time}
                      </p>
                      <p className='xl:text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-semibold'>
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
                    absolute bottom-[40%] lg:bottom-[47%] left-[6%] lg:-left-[12%] text-[1.5rem] lg:text-[2.5rem] text-white cursor-pointer select-none
                  '
              />
              <FaArrowCircleRight
                onClick={() =>
                  setCurrent(current === length - 1 ? 0 : current + 1)
                }
                className='
                    absolute bottom-[40%] lg:bottom-[47%] right-[6%] lg:left-[107%] text-[1.5rem] lg:text-[2.5rem] text-white cursor-pointer select-none
                  '
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
