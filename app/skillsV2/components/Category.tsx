import { SkillImage } from '@/app/types';
import React from 'react'

interface CategoryTypes {
  title: string;
  images: SkillImage[];
}

const Category: React.FC<CategoryTypes> = ({title, images}) => {
  return (
    <div className='flex justify-between items-center'>
      <h1>{title}</h1>
      <div className='flex gap-4'>
        {images.map((img: SkillImage) => {
          return (
            <div key={title} className='group hover:translate-y-3 transition-all duration-500 flex flex-col items-center'>
              <img className={`cursor-pointer ${img.className}`} width='80' height='80' src={img.src} alt={img.title}/>
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