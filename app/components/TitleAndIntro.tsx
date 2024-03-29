import React from 'react';
import SentenceAnimation from './SentenceAnimation';
import TypeEffect from './TypeEffect';

const TitleAndIntro = () => {
  return (
    <div className='flex flex-col text-[24px] md:text-[40px] sm:max-w-[750px]'>
      <SentenceAnimation
        phrase='George&nbsp;Tsimis'
        className='text-white font-semibold cursor-pointer tracking-wider'
      />
      <TypeEffect />
      <div className='text-white lg:max-w-[30rem] xl:max-w-[40rem] text-xs sm:text-xl sm:pt-5 sm:font-semibold flex flex-col gap-6'>
        <p>
          I have over two years of experience working as a Full Stack Software
          Engineer on a team developing web applications with JavaScript,
          TypeScript, Node, React, Next, Java, Spring Boot, Tailwind, Mantine,
          AWS, Jest, React Testing Library, PostgreSQL, Ruby on Rails, Redux,
          and GraphQL.
        </p>
        <p>
          Coding is incredibly rewarding and fun! It allows me to express myself
          analytically and creatively while solving real world problems and
          building intuitive, aesthetically pleasing apps.
        </p>
        <p>
          When I am not coding, I enjoy watching sports, especially European
          Football. I am a supporter of Manchester United Football Club. I also
          enjoy traveling, learning about different cultures, taking evening
          walks with my wife, reading, playing guitar, and looking for the best
          taco in America.
        </p>
        <p className='mb-2 lg:mb-0'>
          I am based out of New York City and have a Master&apos;s in
          Mathematics.
        </p>
      </div>
    </div>
  );
};

export default TitleAndIntro;
