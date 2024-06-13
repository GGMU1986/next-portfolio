import React from 'react'
import Headline from '../components/Headline';
import { SKILLS } from '@/constants/skills';
import Category from './components/Category';

const Skills = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-cover bg-center gap-10'>
      <div className='sm:flex text-[1.5rem] md:text-[2.5rem] lg:text-[3.75rem] gap-4 mt-[4%] text-center'>
        <Headline headline='Skills' />
        <p className='font-bold text-white'>&amp;</p>
        <Headline headline='Technologies' />
      </div>
      <div className='w-1/2 text-white font-bold font-mono text-3xl p-4 flex flex-col gap-6'>
        {SKILLS.map(skill => {
          return (
            <div key={skill.title}>
              <Category 
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