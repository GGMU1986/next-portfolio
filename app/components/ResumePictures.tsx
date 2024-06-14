import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { ResumePicture } from '../types';

interface ResumePicturesProps {
  setNext: (state: boolean) => void;
  picsArray: ResumePicture[];
}

const ResumePictures: React.FC<ResumePicturesProps> = ({
  setNext,
  picsArray,
}) => {
  const [current, setCurrent] = useState<number>(0);
  const length = picsArray.length;

  return (
    <div className='px-16'>
      <div>
        {picsArray.map((pic) => {
          return (
            <div
              className={
                pic.id === current
                  ? 'opacity-[1] easein duration-1000 relative'
                  : 'opacity-0'
              }
              key={pic.id}
            >
              {pic.id === current ? (
                <div className='flex flex-col justify-center items-center relative'>
                  <h2 className='text-white text-2xl font-semibold text-center'>
                    {pic.id > 9
                      ? `Aspen Suite - ${pic.tab}`
                      : `Borrower Portal - ${pic.tab}`}
                  </h2>
                  <img
                    onClick={() =>
                      setCurrent(current === length - 1 ? 0 : current + 1)
                    }
                    src={pic.path}
                    alt={pic.alt}
                    className='object-scale-down w-[400px] h-[200px] sm:w-[900px] sm:h-[600px] my-4 cursor-pointer relative'
                  />
                  <p className='flex justify-center items-center text-center text-lg text-white px-20'>
                    {pic.description}
                  </p>
                </div>
              ) : (
                <></>
              )}
              <IoIosArrowDropleftCircle
                className='text-[30px] text-white absolute -left-[5%] bottom-[50%] cursor-pointer'
                onClick={() =>
                  setCurrent(current === 0 ? length - 1 : current - 1)
                }
              />
              <IoIosArrowDroprightCircle
                className='text-[30px] text-white absolute -right-[5%] bottom-[50%] cursor-pointer'
                onClick={() =>
                  setCurrent(current === length - 1 ? 0 : current + 1)
                }
              />
              <div className='absolute -left-[1%] -bottom-[6%] text-white'>
                {pic.id + 1}/{picsArray.length}
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex justify-end'>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255, 255, 255)',
            boxShadow: '0px 0px 8px rgb(255, 255, 255)',
          }}
          className='bg-black text-white border rounded text-center w-fit h-6 p-4 flex items-center'
          onClick={() => setNext(false)}
        >
          Back
        </motion.button>
      </div>
    </div>
  );
};

export default ResumePictures;
