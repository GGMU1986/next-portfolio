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
        <p>Thank you for visiting my site! I built this site with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        <p>
          I have 2.5 years of professional experience working as a Full Stack Software
          Engineer. I specialize in building apps with Java, Spring, Node.js, JavaScript, TypeScript, 
          React.js, Next.js, Tailwind CSS, Jest, React Testing Library, SQL, PostgreSQL, Mongo DB and AWS.
          I have experience with Ruby on Rails, Redux, and GraphQL as well.
        </p>
        <p>
          When I&apos;m not coding, I enjoy watching sports, especially European
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
