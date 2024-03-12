"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SKILLS1, SKILLS2 } from "../../constants/skills";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import BackHomeButton from "../components/BackHomeButton";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/backgrounds/skills.png)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-5 sm:gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-[30px] sm:text-[70px] text-black">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              &amp;{" "}
            </span>
            Technologies
          </h1>
        </div>
        <Swiper
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SKILLS1.map((skill: any, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.image}
                alt={skill.alt}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={6000}
          modules={[Autoplay]}
          className="max-w-[80%] flex items-center justify-center text-center"
        >
          {SKILLS2.map((skill: any, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.image}
                alt={skill.alt}
                width={skill.width}
                height={skill.height}
                className={skill.className}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <BackHomeButton className='left-1 bottom-1 text-xs sm:text-lg py-1 px-2 sm:py-2 sm:px-4 sm:mt-10 sm:bottom-20 sm:left-10'/> 
    </div>
  );
};

export default Page;