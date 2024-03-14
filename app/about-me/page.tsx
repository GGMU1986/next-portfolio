
import React from 'react';
import BackHomeButton from '../components/BackHomeButton';

const aboutMe = () => {
  return (
    <div className='w-full h-full bg-cover bg-center'>
      <div className='max-w-[100rem] px-10 pt-[45px] sm:max-w-[80rem] sm:px-20'>
        <p className='text-white text-lg mb-1 sm:text-5xl sm:mb-4'>About me...</p>
        <div className='text-amber-300 text-[13px] sm:text-2xl sm:font-bold'>
          <p className='mb-1 sm:mb-4 sm:leading-normal'>
            I'm a native New Yorker. I graduated with a BA in Mathematics from Queens College. 
            I spent three semesters teaching at the City University of New York.
            I have taught Elementary Algebra, College Algebra &amp; Trigonometry, Pre-Calculus, and Calculus.
            I continued my education, receiving a BA in Accounting, and started working in Finance, as a Financial Data Analyst,
            at Moody's Corporation.
          </p> 
          <p className='mb-1 sm:mb-4 sm:leading-normal'> 
            While at Moody's, I finished my MA in Mathematics, which is where I was, initially, exposed to coding. 
            I took a python class and my love for coding began. I knew I wanted to transition into Software Engineering. 
            I was able to secure a place in one of the most selective coding bootcamps in the country. 
            I have since been working as a Software Engineer for two years.
          </p>
          <p className='invisible sm:visible mb-1 sm:mb-4 sm:leading-normal'>
            Coding is incredibly rewarding and fun! It allows me to express myself analytically and creatively while solving real world problems and building intuitive,
            aesthetically pleasing apps.
          </p>
          <p className='invisible sm:visible mb-1 sm:mb-4 sm:leading-normal'>
            When I'm not coding, I like to watch sports, especially european football. 
            I also enjoy traveling, learning about different cultures, 
            taking evening walks with my wife, reading, playing guitar, and looking for the best taco in America.
          </p>
        </div>
      </div>
      <BackHomeButton className='left-1 bottom-1 text-xs sm:text-lg py-1 px-2 sm:py-2 sm:px-4 sm:mt-10 sm:bottom-20 sm:left-10' />
    </div>
  )
}

export default aboutMe;