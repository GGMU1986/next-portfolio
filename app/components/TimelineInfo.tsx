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
      className={`relative w-full sm:w-1/2 pl-[80px] pr-[25px] sm:py-[10px] sm:px-[10%] -left-[3%] ${
        id % 2 === 0 ? 'sm:left-[55%]' : 'sm:left-[10%]'
      }`}
      onClick={() => {
        setIndex(id);
        setShowModal(true);
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-[50px] h-[50px] rounded-xl z-[10] absolute top-[37%] left-[5.5%] ${
          id % 2 === 0 ? 'sm:-left-[4.5%]' : 'sm:-right-[20.5%]'
        }`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: id + 0.5, ease: 'easeIn' }}
        // whileHover={{
        //   scale: 1.1,
        //   backgroundColor: `${
        //     type === 'school'
        //       ? 'blue'
        //       : type === 'work'
        //       ? 'midnightblue'
        //       : 'cadetblue'
        //   }`,
        //   transition: { duration: 0.3 },
        // }}
        className={`
        ${
          type === 'school'
            ? 'bg-blue-500'
            : type === 'work'
            ? 'bg-blue-700'
            : 'bg-cyan-900'
        } border rounded-lg shadow-glow w-[250px] h-[115px] lg:w-[350px] lg:h-[200px] z-[10] text-white flex flex-col items center mb-[20px] sm:mb-0 px-4 lg:p-6 gap-1 lg:gap-2 cursor-pointer relative
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
