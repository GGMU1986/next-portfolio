import React from 'react';
import SentenceAnimation from './SentenceAnimation';
import TypeEffect from './TypeEffect';

const TitleAndIntro = () => {
  return (
    <div className='flex flex-col text-[24px] md:text-[40px] sm:max-w-[750px]'>
      <h2 className='text-[3rem] lg:text-[6rem] animate-welcome text-white font-welcome tracking-widest'>
        Welcome
      </h2>
      <SentenceAnimation
        phrase='George&nbsp;Tsimis'
        className='text-white font-semibold cursor-pointer tracking-wider'
      />
      <TypeEffect />
      <div className='text-white lg:max-w-[30rem] xl:max-w-[40rem] text-[1rem] sm:text-xl sm:pt-5 sm:font-semibold flex flex-col gap-6 mb-6'>
        <p>
          I&apos;m an experienced Full Stack Software Engineer with a Master&apos;s in Mathematics who has led projects leveraging 
          Java, Spring Framework, Node.js, JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS, 
          while collaborating with various internal teams/stakeholders, to build scalable and secure applications 
          that focus on providing an intuitive and pleasant user experience.
        </p>
        <p>I built this site using Next.js, TypeScript, Tailwind CSS, and Framer Motion</p>
      </div>
    </div>
  );
};

export default TitleAndIntro;
