'use client';
import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import 'swiper/css';
import { SKILLS } from '@/constants/skills';
import Category from './Category';

const MobileSkills = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <div className='block md:hidden flex gap-10'>
      {SKILLS.map((skill, i) => {
        if (i >= step && i < step + 2) {
          return (
            <div key={skill.title} className='text-white text-2xl font-semibold'>
              <Category 
                title={skill.title}
                images={skill.images}
              />
            </div>
          )
        }
      })}
      <FaArrowCircleLeft 
        onClick={() => setStep(step === 0 ? 4 : step - 2)} 
        className='absolute text-white text-2xl top-[50%] left-[10%]' 
      />
      <FaArrowCircleRight 
        onClick={() => setStep(step === 4 ? 0 : step + 2)} 
        className='absolute text-white text-2xl top-[50%] right-[10%]' 
      />
    </div>
  )
}

export default MobileSkills;