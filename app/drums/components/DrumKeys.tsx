'use client';

import { SOUND_ATTRIBUTES } from '@/constants/soundAttributes';
import React, { useEffect } from 'react';
import DrumKey from './DrumKey';

const DrumKeys = () => {
  let drumkey: HTMLElement | null;
  let audio: HTMLAudioElement | null;

  useEffect(() => {
    const audioHandler = (e: KeyboardEvent) => {
      const keys = 'asdfjkl;';
      if (keys.includes(e.key)) {
        drumkey = document.getElementById(`drum-key-${e.code}`);
        audio = document.querySelector(`#${e.code}`);
        if (audio) {
          audio.currentTime = 0;
          audio.play();
          drumkey?.animate(
            [{ transform: 'scale(1.1)' }, { backgroundColor: '#9333ea' }],
            {
              duration: 400,
              iterations: 1,
            }
          );
        }
      }
    };

    document.addEventListener('keydown', audioHandler);
    return () => {
      document.removeEventListener('keydown', audioHandler);
    };
  });

  return (
    <div className='flex justify-center gap-8 mt-[15rem]'>
      {SOUND_ATTRIBUTES.map((att) => {
        return (
          <div key={att.id}>
            <DrumKey
              key={att.id}
              id={att.id}
              src={att.src}
              letter={att.letter}
              piece={att.piece}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DrumKeys;
