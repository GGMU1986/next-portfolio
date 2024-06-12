import React from 'react'
import Headline from '../components/Headline';

const Skills = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-cover bg-center gap-10'>
      <div className='sm:flex text-[1.5rem] md:text-[2.5rem] lg:text-[3.75rem] gap-4 mt-[4%] text-center'>
        <Headline headline='Skills' />
        <p className='font-bold text-white'>&amp;</p>
        <Headline headline='Technologies' />
      </div>
      <div>
        <img src="/skills/newHTML.png" alt="newHTML" />
        <img src="/skills/newCSS.png" alt="newHTML" />
        <img src="/skills/newJS.png" alt="newHTML" />
        <img src="/skills/newNext.png" alt="newHTML" />
      </div>
    </div>
  )
}

export default Skills;