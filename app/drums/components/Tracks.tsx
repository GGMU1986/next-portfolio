import { TRACKS } from '@/constants/soundAttributes';
import React from 'react';
import Track from './Track';

const Tracks = () => {
  return (
    <div className='ml-10 border-4 border-white rounded-xl text-white inline-block p-4 h-fit'>
      <h1 className='text-3xl font-bold'>Drumless Tracks</h1>
      <div className='mt-4 flex flex-col gap-2'>
        {TRACKS.map((el) => {
          return <Track key={el.id} id={el.id} src={el.src} title={el.title} />;
        })}
      </div>
    </div>
  );
};

export default Tracks;
