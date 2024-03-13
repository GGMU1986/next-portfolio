import React from 'react'

const TimeLineAndCircles = () => {
  return (
    <>
      <div className='w-1 h-[200rem] bg-gray-600 rounded relative left-[50%]'>
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[8%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[16%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[24%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[32%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[40%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[48%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[56%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[64%]' />
      </div>
    </>
  )
}

export default TimeLineAndCircles;