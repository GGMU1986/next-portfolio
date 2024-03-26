import React from 'react';

import TitleAndIntro from './components/TitleAndIntro';
import Portrait from './components/Portrait';
import PortraitV2 from './components/PortraitV2';

export default function Home() {
  return (
    <div className='lg:flex lg:justify-between px-10 sm:px-20 w-full h-full bg-cover bg-center'>
      <TitleAndIntro />
      {/* <Portrait /> */}
      <PortraitV2 />
    </div>
  );
}
