"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { SKILLS1, SKILLS2 } from "../../constants/skills";
import Headline from "../components/Headline";
import { Skill } from "../types";

const Page = () => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-5 sm:gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className='flex text-[24px] sm:text-[60px] gap-4'>
            <Headline headline='Skills'/>
            <p className='font-bold text-white'>&amp;</p>
            <Headline headline='Technologies'/>
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
          className="max-w-[80%]"
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
            reverseDirection: true
          }}
          speed={3000}
          modules={[Autoplay]}
          className="max-w-[80%] flex items-center justify-center text-center"
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

export default Page;