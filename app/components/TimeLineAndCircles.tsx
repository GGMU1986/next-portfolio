import React from 'react'

const TimeLineAndCircles = () => {
  return (
    <>
      <div className='w-1 h-[120rem] bg-black rounded relative left-[50%]'>
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[10%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[20%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[30%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[40%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[50%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[60%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[70%]' />
        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[80%]' />
      </div>
    </>
  )
}

export default TimeLineAndCircles;