'use client'
import { SkillImage } from '@/app/types';
import { motion } from 'framer-motion';
import React from 'react'

interface CategoryTypes {
  id: number,
  title: string;
  images: SkillImage[];
  isMobile?: boolean;
}

const Category: React.FC<CategoryTypes> = ({ id, title, images, isMobile }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: isMobile ? 1 : 1.5, delay: isMobile ? 0.1 : id + 0.5, ease: 'easeIn' }}
        className='m-0 md:mr-2'
      >
        {title}
      </motion.h1>
      <div className='flex flex-col md:flex-row gap-2'>
        {images.map((img: SkillImage) => {
          return (
            <div key={img.id} className='group hover:translate-y-3 transition-all duration-500 flex flex-col items-center'>
              <motion.img
                initial={{ x: 1800 }}
                animate={{ x: 0, rotate: -1080 }}
                transition={{ duration: isMobile ? 1 : 2, delay: isMobile ? 0.25 : id + 0.5, ease: 'easeIn' }} 
                className='cursor-pointer rounded-full w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]' 
                src={img.src} 
                alt={img.title}
              />
              <span className='absolute opacity-0 group-hover:bg-blue-900 p-2 text-sm rounded-lg text-center group-hover:text-white group-hover:opacity-100 group-hover:-translate-y-8 duration-700'>
                {img.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Category;