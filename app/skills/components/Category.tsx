import { SkillImage } from '@/app/types';
import React from 'react'

interface CategoryTypes {
  title: string;
  images: SkillImage[];
}

const Category: React.FC<CategoryTypes> = ({title, images}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <h1 className='m-0 md:mr-2'>{title}</h1>
      <div className='flex flex-col md:flex-row gap-2'>
        {images.map((img: SkillImage) => {
          return (
            <div key={img.title} className='group hover:translate-y-3 transition-all duration-500 flex flex-col items-center'>
              <img className='cursor-pointer rounded-full w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]' src={img.src} alt={img.title}/>
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