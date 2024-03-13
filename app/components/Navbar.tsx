import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[50px] sm:h-[100px] bg-transparent flex justify-start sm:justify-between justify-center gap-2 items-center px-10 sm:px-20">
      <Link href='/'>
        <Image 
          src='/favicon.ico'
          alt='logo'
          width={70}
          height={70}
          className='rounded-full shadow-glow'
        />
      </Link>
      <div className="flex gap-10 cursor-pointer text-white items-center">
        <Link 
          href="/George_Tsimis_Resume.pdf" 
          className='font-semibold text-[10px] sm:text-xl font-white hover:italic hover:text-slate-200 tracking-[2px]' 
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