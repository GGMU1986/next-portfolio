import React from 'react'
import TimeLineAndCircles from '../components/TimeLineAndCircles';
import TimelineInfo from '../components/TimelineInfo'
import { TIMELINEINFO } from '@/constants/timeline';

const timeline = () => {
  return (
    <div className='relative'>
          <TimelineInfo 
            type='dev' 
            title='Associate Software Engineer' 
            place='Aspen Capital - New York, NY'
            date='Aug 2022 - Present'
            info='' 
            className='absolute top-[4.5%] sm:top-[5%] left-[10%] sm:left-[22%] z-[10] cursor-pointer' 
          />
          <TimelineInfo 
            type='dev'
            title='Software Engineer I'
            place='LynxDx, Inc - Ann Arbor, MI'
            date='Feb 2022 - July 2022'
            info=''
            className='absolute top-[12.5%] sm:top-[13%] left-[10%] sm:left-[60%] z-[10] cursor-pointer' 
          />
          <TimelineInfo 
            type='school' 
            title='Coding Bootcamp' 
            place='App Academy - New York, NY'
            date='Nov 2021'
            info='' 
            className='top-[20.5%] sm:top-[21%] absolute left-[10%] sm:left-[22%] z-[10] cursor-pointer' 
          />
          <TimelineInfo 
            type='school' 
            title='MA Mathematics' 
            place='Queens College - New York, NY'
            date='Sept 2021'
            info='' 
            className='top-[28.5%] sm:top-[29%] absolute left-[10%] sm:left-[60%] z-[10] cursor-pointer'
          />
          <TimelineInfo 
            type='work' 
            title='Financial Data Analyst' 
            place='Moody&apos;s Corporation - New York, NY'
            date='July 2018 - July 2021'
            info='' 
            className='top-[36.5%] sm:top-[37%] absolute left-[10%] sm:left-[22%] z-[10] cursor-pointer'
          />
          <TimelineInfo 
            type='work' 
            title='Assurance Intern' 
            place='PriceWaterhouseCoopers - New York, NY'
            date='Jan 2018 - Apr 2018'
            info='' 
            className='top-[44.5%] sm:top-[45%] absolute left-[10%] sm:left-[60%] z-[10] cursor-pointer'
          />
          <TimelineInfo 
            type='work' 
            title='Math Adjunct Lecturer' 
            place='CUNY - New York, NY'
            date='Aug 2016 - Dec 2017'
            info='Classes taught: Pre-calculus, Calculus'
            className='top-[52.5%] sm:top-[53.5%] absolute left-[10%] sm:left-[22%] z-[10] cursor-pointer'
          />
          <TimelineInfo 
            type='school' 
            title='BA Mathematics' 
            place='Queens College - New York, NY'
            date='June 2016'
            info='' 
            className='top-[60.5%] sm:top-[61%] absolute left-[10%] sm:left-[60%] z-[10] cursor-pointer'
          />
      <TimeLineAndCircles />
    </div>
  )
}

export default timeline;