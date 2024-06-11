import React from 'react';
import Headline from '../components/Headline';
import DrumKeys from './components/DrumKeys';
import Instructions from './components/Instructions';
import Tracks from './components/Tracks';

const Drums = () => {
  return (
    <>
      <h1 className='block lg:hidden text-white text-center text-3xl p-4 relative top-16'>
        Please view on larger screen to play the Drum Simulator
      </h1>
      <div className='hidden lg:block lg:mt-10 lg:relative'>
        <Headline headline='Drum Simulator' className='text-5xl text-center' />
        <Tracks />
        <Instructions className='absolute right-[10%] top-[5%]' />
        <DrumKeys />
      </div>
    </>
  );
};

export default Drums;
