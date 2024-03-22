'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { SKILLS1, SKILLS2 } from '../../constants/skills';
import Headline from '../components/Headline';
import { Skill } from '../types';

const Skills = () => {
  return (
    <div className='w-screen flex items-center justify-center bg-cover bg-center'>
      <div className='flex flex-col gap-5 sm:gap-10 max-w-[80%] text-center items-center'>
        <div className='flex flex-col items-center gap-4'>
          <div className='sm:flex text-[1.5rem] md:text-[2.5rem] lg:text-[3.75rem] gap-4 sm:mt-[20%] mt-[50%]'>
            <Headline headline='Skills' />
            <p className='font-bold text-white'>&amp;</p>
            <Headline headline='Technologies' />
          </div>
        </div>
        <Swiper
          slidesPerView={8}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          modules={[Autoplay]}
          className='max-w-[80%]'
        >
          {SKILLS1.map((skill: Skill, index: number) => (
            <SwiperSlide key={index}>
              <img src={skill.image} alt={skill.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={8}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={3000}
          modules={[Autoplay]}
          className='max-w-[80%]'
        >
          {SKILLS2.map((skill: Skill, index: number) => (
            <SwiperSlide key={index}>
              <img src={skill.image} alt={skill.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
