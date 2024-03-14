import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[50px] sm:h-[100px] bg-transparent flex justify-between justify-center gap-2 items-center px-10 sm:px-20">
      <Link href='/'>
        <img src="/favicon.ico" alt="logo" className='w-[30px] h-[30px] sm:w-[70px] sm:h-[70px] rounded-full shadow-glow' />
      </Link>
      <div className="flex gap-10 cursor-pointer text-white items-center">
        <Link 
          href="/George_Tsimis_Resume.pdf" 
          target="blank">
            RESUME
        </Link>
        <Link 
          href="https://www.linkedin.com/in/george-tsimis-a5986224/" 
          target="blank"
        >
          <img 
            src='/linkedin.png' 
            alt='linkedin' 
            className='shadow-glow rounded-full w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] hover:hoverGlow'
          />
        </Link> 
      </div>
    </div>
  )
}

export default Navbar;