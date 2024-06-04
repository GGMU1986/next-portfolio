import React from 'react';
import Headline from '../components/Headline';
import DrumKeys from './components/DrumKeys';
import Instructions from './components/Instructions';
import Tracks from './components/Tracks';

const Drums = () => {
  return (
    <div className='mt-10 relative'>
      <Headline headline='Drum Simulator' className='text-5xl text-center' />
      <Tracks />
      <Instructions className='absolute right-[10%] top-[5%]' />
      <DrumKeys />
    </div>
  );
};

export default Drums;
