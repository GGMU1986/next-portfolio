import React from 'react'

import { FaCode } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";

interface TimelineInfoProps {
  type: string,
  title: string,
  place: string
  date: string; 
  info?: string
  className: string;
}

const TimelineInfo: React.FC<TimelineInfoProps> = ({ type, title, place, date, info, className }) => {
  return (
    <div className={`${className}`}>
      <div className={`
        ${type === 'school' ? 'bg-blue-500' : type === 'work' ? 'bg-blue-700' : 'bg-cyan-900'} 
        border rounded-lg shadow-glow w-[250px] h-[100px]  sm:w-[350px] sm:h-[200px] text-white flex flex-col items center p-2 sm:p-6 gap-1 relative
      `}>
        <div className='absolute top-1 right-2 sm:top-2 sm:right-4 text-sm sm:text-xl'>
          {type === 'school' ?  <IoSchoolSharp className='' /> : type === 'work' ? <MdOutlineWork className='' /> : <FaCode className='' />}
        </div>
        <div className='text-sm sm:text-xl font-bold'>
          {title}
        </div>
        <div className='text-sm sm:text-lg'>
          {place}
        </div>
        <div className='text-sm sm:text-lg'>
          {date}
        </div>
        <div>
          {info}
        </div>
      </div>
    </div>
  )
}

export default TimelineInfo;

