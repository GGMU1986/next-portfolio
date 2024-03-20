import React from 'react';
import Headline from './Headline';
import SentenceAnimation from './sentenceAnimation';
import TypeEffect from './TypeEffect';

const TitleAndIntro = () => {
  return (
    <div className='flex flex-col text-[24px] md:text-[40px] z-[10] sm:max-w-[750px] ml-2'>
      <SentenceAnimation
        phrase='George&nbsp;Tsimis'
        className='text-white font-semibold cursor-pointer tracking-wider'
      />
      <TypeEffect />
      <div className='text-white sm:max-w-[40rem] text-sm sm:text-xl sm:pt-5 font-semibold'>
        I have over two years of experience working as a Full Stack Software
        Engineer on a team developing web applications with JavaScript,
        TypeScript, Node, React, Next, Java, Spring Boot, Tailwind, Mantine,
        AWS, Jest, React Testing Library, PostgreSQL, Ruby on Rails, Redux, and
        GraphQL.
        <br />
        <br />
        Coding is incredibly rewarding and fun! It allows me to express myself
        analytically and creatively while solving real world problems and
        building intuitive, aesthetically pleasing apps.
        <br />
        <br />
        When I am not coding, I enjoy watching sports, especially European
        Football. I am a supporter of Manchester United Football Club. I also
        enjoy traveling, learning about different cultures, taking evening walks
        with my wife, reading, playing guitar, and looking for the best taco in
        America. <br />
        <br />I am based out of New York City and have a Master's in
        Mathematics.
      </div>
    </div>
  );
};

export default TitleAndIntro;
