'use client';
import React from 'react';

interface InstructionsTypes {
  className: string;
}

const Instructions: React.FC<InstructionsTypes> = ({ className }) => {
  return (
    <div className={className}>
      <button className='group relative border-2 text-white rounded px-3 py-1 text-2xl inline-block'>
        Instructions
        <div className='absolute top-full right-0 font-mono border-2 rounded-lg p-3 mt-1 scale-y-0 group-hover:scale-y-100 origin-top duration-200 w-[27rem]'>
          Key down on A, S, D, F, J, K, L, and Semicolon (;) on your keyboard to
          make sounds from a drum set. <br />
          <br /> You can also add the percussion to one of the drumless tracks.
          Just press play and start jamming. <br />
          <br /> Enjoy!
        </div>
      </button>
    </div>
  );
};

export default Instructions;
