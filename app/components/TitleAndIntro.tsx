import React from 'react'

const TitleAndIntro = () => {
  return (
    <div className='flex flex-col text-[24px] sm:text-[40px] z-[10] sm:max-w-[750px]'>
      <div className='text-white font-semibold'>
        George Tsimis
      </div>
      <div className='animate-pulse font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500'>
        Software Engineer
      </div>
      <div className='text-white sm:max-w-[40rem] text-sm sm:text-xl sm:pt-5'>
        I have two years experience working as a Full Stack Software Engineer on a team developing web applications with JavaScript,
        TypeScript, Node, React, Next, Java, Spring Boot, Tailwind, Mantine, AWS, Jest, React Testing Library, and PostgreSQL.<br/><br/>
        I also have experience developing apps with Ruby on Rails, Redux, and GraphQL. Coding is incredibly rewarding and fun! 
        It allows me to express myself analytically and creatively while solving real world problems and building intuitive,
        aesthetically pleasing apps.<br/><br/>
        When I am not coding, I enjoy watching sports, especially european football. I am a supporter of Manchester United Football Club.
        I also enjoy traveling, learning about different cultures, taking evening walks with my wife, reading, playing guitar, 
        and looking of the best taco in America. <br/><br/>
        I am based out of New York City and have a Master's in Mathematics.
      </div>
    </div>
  )
}

export default TitleAndIntro;