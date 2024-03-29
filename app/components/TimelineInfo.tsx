import React from 'react';

import { easeIn, motion } from 'framer-motion';

import { FaCode } from 'react-icons/fa6';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdOutlineWork } from 'react-icons/md';

interface TimelineInfoProps {
  id: number;
  type: string;
  title: string;
  place: string;
  date: string;
  src: string;
  alt: string;
  setShowModal: (state: boolean) => void;
  setIndex: (id: number) => void;
}

const TimelineInfo: React.FC<TimelineInfoProps> = ({
  id,
  type,
  title,
  place,
  date,
  src,
  alt,
  setShowModal,
  setIndex,
}) => {
  return (
    <div
      key={id}
      className={`relative w-full sm:w-1/2 pl-[30%] sm:py-[10px] sm:px-[10%] md:px-[3%] lg:px-[4%] -left-[3%] ${
        id % 2 === 0
          ? 'sm:left-[55%] md:left-[62%] 2xl:left-[66%]'
          : 'sm:-left-[9%] md:-left-[2%] lg:-left-[7%] xl:left-[2%] 2xl:left-[12%]'
      }`}
      onClick={() => {
        setIndex(id);
        setShowModal(true);
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-[50px] h-[50px] rounded-xl z-[10] absolute top-[27%] sm:top-[37%] cursor-pointer ${
          id % 2 === 0
            ? 'left-[5.25%] sm:-left-[9.5%] md:-left-[22%] lg:-left-[20.75%] xl:-left-[19.5%] 2xl:-left-[26.25%]'
            : 'left-container'
        }`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: id + 0.5, ease: 'easeIn' }}
        className={`
        ${
          type === 'school'
            ? 'bg-blue-500 hover:bg-blue-400'
            : type === 'work'
            ? 'bg-blue-700 hover:bg-blue-800'
            : 'bg-cyan-900 hover:bg-cyan-800'
        } border rounded-lg shadow-glow w-[250px] h-[115px] lg:w-[350px] lg:h-[200px] z-[10] text-white flex flex-col items center mb-[20px] sm:mb-0 px-4 lg:p-6 gap-1 lg:gap-2 cursor-pointer relative hover:scale-110 transform transition duration-300
      `}
      >
        <div className='absolute top-1 right-2 sm:top-2 sm:right-4 text-sm lg:text-xl'>
          {type === 'school' ? (
            <IoSchoolSharp className='' />
          ) : type === 'work' ? (
            <MdOutlineWork className='' />
          ) : (
            <FaCode className='' />
          )}
        </div>
        <div className='text-sm lg:text-[1.3rem] font-bold mt-6'>{title}</div>
        <div className='text-sm lg:text-lg font-semibold'>{place}</div>
        <div className='text-sm lg:text-lg font-semibold'>{date}</div>
      </motion.div>
    </div>
  );
};

export default TimelineInfo;
