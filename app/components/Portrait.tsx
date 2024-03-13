import React from 'react'

const Portrait = () => {
  return (
    <div className='flex sm:flex-col gap-1 mt-2 mr-8'>
      <img 
        src='/george_img.jpeg' 
        alt='George Pic' 
        className='rounded-xl shadow-glow w-[70px] h-[70px] sm:w-[400px] sm:h-[400px] mr-10' 
      />
    </div>
  )
}

export default Portrait;