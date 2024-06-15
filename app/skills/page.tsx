import React from 'react'
import Headline from '../components/Headline';
import { SKILLS } from '@/constants/skills';
import Category from './components/Category';
import MobileSkills from './components/MobileSkills';

const Skills = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-cover bg-center gap-10'>
      <div className='sm:flex text-[1.5rem] md:text-[2.5rem] lg:text-[3.75rem] gap-4 mt-[4%] text-center'>
        <Headline headline='Skills' />
        <p className='font-bold text-white'>&amp;</p>
        <Headline headline='Technologies' />
      </div>
      <MobileSkills />
      <div className='hidden md:block xl:w-1/2 md:text-white md:font-bold md:font-mono md:text-2xl lg:text-3xl md:p-4 md:flex md:flex-col md:gap-6'>
        {SKILLS.map(skill => {
          return (
            <div key={skill.title}>
              <Category
                id={skill.id} 
                title={skill.title}
                images={skill.images}
              />
            </div>
        )})}
      </div>
    </div>
  )
}

export default Skills;