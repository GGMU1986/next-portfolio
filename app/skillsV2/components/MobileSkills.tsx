'use client';
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { SKILLS } from '@/constants/skills';
import Category from './Category';

const MobileSkills = () => {
  return (
    <div className='block lg:hidden flex gap-10'>
      {SKILLS.map(skill => {
        return (
          <div key={skill.title} className='text-white text-2xl font-semibold'>
            <Category 
              title={skill.title}
              images={skill.images}
            />
          </div>
        )
      })}
    </div>
  )
}

export default MobileSkills;