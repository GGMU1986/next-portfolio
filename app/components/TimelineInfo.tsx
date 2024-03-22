import React from 'react';

import { motion } from 'framer-motion';

import { FaCode } from 'react-icons/fa6';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdOutlineWork } from 'react-icons/md';

interface TimelineInfoProps {
  id: number;
  type: string;
  title: string;
  place: string;
  date: string;
  className: string;
  setShowModal: (state: boolean) => void;
  setIndex: (id: number) => void;
}

const TimelineInfo: React.FC<TimelineInfoProps> = ({
  id,
  type,
  title,
  place,
  date,
  className,
  setShowModal,
  setIndex,
}) => {
  return (
    <motion.div
      key={id}
      whileHover={{ scale: 1.1 }}
      className={`${className}`}
      onClick={() => {
        setIndex(id);
        setShowModal(true);
      }}
    >
      <div
        className={`
        ${
          type === 'school'
            ? 'bg-blue-500'
            : type === 'work'
            ? 'bg-blue-700'
            : 'bg-cyan-900'
        }
        border rounded-lg shadow-glow w-[250px] h-[115px] lg:w-[350px] lg:h-[200px] z-[10] text-white flex flex-col items center px-4 lg:p-6 gap-1 lg:gap-2 relative
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
      </div>
    </motion.div>
  );
};

export default TimelineInfo;
