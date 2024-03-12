import React from 'react'

import Link from "next/link";

const PortraitAndButtons = () => {
  return (
    <div className='flex sm:flex-col gap-1 mt-2'>
      <img src='/george_img.jpeg' alt='George Pic' className='rounded-xl shadow-glow w-[70px] h-[70px] sm:w-[300px] sm:h-[300px]' />
      <div className='ml-8 flex-col sm:ml-0 flex sm:flex-row items-center justify-center'>
        <Link href='/about-me'>
          <button className='bg-transpanrent border hover:shadow-glow text-white w-[6rem] sm:w-[7rem] font-bold sm:py-2 sm:px-4 sm:mt-4 rounded hover:italic'>
            About me
          </button>
        </Link>
        <Link href='/my-skills' className='mt-2 sm:ml-20'>
          <button className='bg-transpanrent border hover:shadow-glow text-white w-[6rem] sm:w-[6.5rem] font-bold sm:py-2 sm:px-4 sm:mt-4 rounded hover:italic'>
            My Skills
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PortraitAndButtons;