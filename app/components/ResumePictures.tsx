import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { ResumePicture } from '../types';

interface ResumePicturesProps {
  setNext: (state:boolean) => void
  picsArray: ResumePicture[];
}

const ResumePictures: React.FC<ResumePicturesProps> = ({ setNext, picsArray }) => {
  const [current, setCurrent] = useState(0);
  const length = picsArray.length;
  
  return (
    <div>
      <div>
        {picsArray.map(pic => {
          return (
            <div 
              className={pic.id === current ? 'opacity-[1] easein duration-1000 relative' : 'opacity-0'} 
              key={pic.id}
            > 
              {pic.id === current ? (
                <>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='text-white text-2xl font-semibold text-center'>{pic.id > 7 ? 'Aspen Suite - Internal app' : 'Borrower Portal - User-facing app'}</div>
                    <img
                      onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)} 
                      src={pic.path} 
                      alt={pic.alt}
                      className='object-scale-down w-[400px] h-[200px] sm:w-[900px] sm:h-[600px] my-4 cursor-pointer relative' 
                    />
                    <div className='flex justify-center items-center text-center text-lg text-white'>
                      {pic.description}
                    </div>     
                  </div>
                </>
              ) : <></>}
            </div>
          )
        })}
        <div className='flex justify-center items-center cursor-pointer text-white gap-5 mt-8'>
          <IoIosArrowDropleftCircle 
            className='text-[30px]'
            onClick={() => setCurrent(current === 0 ? length - 1  : current - 1)} 
          />
          {Array.from({length}, (_, i) => i + 1).map(el => <div className='cursor-pointer' onClick={() => setCurrent(el - 1)}>{el}</div>)}
          <IoIosArrowDroprightCircle 
            className='text-[30px]'
            onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)} 
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <motion.button 
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255, 255, 255)',
            boxShadow: '0px 0px 8px rgb(255, 255, 255)'
          }}
          className='bg-black text-white border rounded text-center w-fit h-6 p-4 flex items-center'
          onClick={() => setNext(false)}
        >
          Back
        </motion.button>
      </div>
    </div>
  )
}

export default ResumePictures;