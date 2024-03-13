import React from 'react'
import TimeLineAndCircles from '../components/TimeLineAndCircles';
import TimelineInfo from '../components/TimelineInfo'
import { TIMELINEINFO } from '@/constants/timeline';

const timeline = () => {
  return (
    <div className='relative'>
    {TIMELINEINFO.map((el, i) => {
      return (
        <div key={i}>
          <TimelineInfo 
            type={el.type} 
            title={el.title} 
            place={el.place}
            date={el.date}
            info={el.info} 
            // className={`absolute z-[10] cursor-pointer left-[10%] ${i % 2 === 0 ? 'sm:left-[22%]' : 'sm:left-[60%]'} ${el.className}`}
            className={el.className}
          />
        </div>
      )
    })}
      <TimeLineAndCircles />
    </div>
  )
}

export default timeline;