"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';

import { PICS } from '../../constants/pics';

const page = () => {
  const [current, setCurrent] = useState(0);
  const length = PICS.length;

  const nextPic = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };
  
  const prevPic = () => {
    setCurrent(current === 0 ? length - 1  : current - 1)
  };

  return (
    <div className='pt-[70px] px-20'>       
      <p className='font-semibold text-[30px] sm:text-[40px] text-white'>
        Some photos from my travels...
      </p>
      <div>
        {PICS.map((pic, i) => {
          return (
            <div 
              className={i === current ? 'opacity-[1] easein duration-1000 flex item-center justify-center mt-16 w-[800px] h-[600px]' : 'opacity-0'} 
              key={i}
            >
              <FaArrowCircleLeft
                onClick={prevPic} 
                className='
                  absolute top-[54%] left-[13%] text-xl text-white/70 cursor-pointer select-none z-[2]
                ' 
              />
              {i == current ? (
                <Image 
                  src={pic.path}
                  alt=''
                  width={800}
                  height={600}
                  objectFit='cover'
                />
              ) : <></>}
              <FaArrowCircleRight
                onClick={nextPic} 
                className='
                  absolute top-[54%] right-[13%] text-xl text-white/70 cursor-pointer select-none z-[2]
                ' 
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page