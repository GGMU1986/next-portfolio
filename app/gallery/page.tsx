"use client"
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
    <div className='flex flex-col items-center mt-[7%]'>       
      <div className='animate-pulse font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 text-[24px] sm:text-[40px]'>
        Gallery
      </div>
      <div>
        {PICS.map((pic, i) => {
          return (
            <div 
              className={i === current ? 'opacity-[1] easein duration-1000 mt-4 relative' : 'opacity-0'} 
              key={i}
            > 
              <p className='sm:invisible visible text-white z-[100] text-center text-[15px]'>{pic.title} - {pic.time}</p>
              <FaArrowCircleLeft
                onClick={prevPic} 
                className='
                  absolute bottom-[43%] sm:bottom-[50%] left-[6%] sm:-left-[15%] text-[24px] sm:text-[40px] text-white/70 cursor-pointer select-none z-[2]
                ' 
              />
              <FaArrowCircleRight
                  onClick={nextPic} 
                  className='
                    absolute bottom-[43%] sm:bottom-[50%] right-[7%] sm:left-[110%] text-[24px] sm:text-[40px] text-white/70 cursor-pointer select-none z-[2]
                  ' 
                /> 
              {i == current ? (
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className='relative'>
                    <img 
                      src={pic.path} 
                      alt={pic.title}
                      className='object-scale-down w-[400px] h-[200px] sm:w-[800px] sm:h-[600px]' 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute invisible sm:visible inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 gap-4 text-center transition-all duration-500 group-hover:translate-y-0">
                    <p className="text-[10px] sm:text-3xl font-bold mb-16 sm:mb-0 text-white">{pic.title}</p>
                    <p className="text-[10px] sm:text-2xl font-bold mb-16 sm:mb-0 text-white">{pic.time}</p>
                    <p className="text-[10px] sm:text-xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{pic.text}</p>
                  </div> 
                </div>  
              ) : <></>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page;