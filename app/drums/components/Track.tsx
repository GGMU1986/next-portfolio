'use client';
import React, { useEffect, useState } from 'react';
import { FcMusic } from 'react-icons/fc';
import { FaStop, FaPlay, FaPause } from 'react-icons/fa';
import TrackButtons from './TrackButtons';

interface TrackTypes {
  id: string;
  src: string;
  title: string;
}

const Track: React.FC<TrackTypes> = ({ id, src, title }) => {
  const [playPause, setPlayPause] = useState<boolean>(false);
  let audio: HTMLAudioElement | null;
  useEffect(() => {
    audio = document.querySelector(`#${id}`);
  });

  return (
    <div className='flex justify-between'>
      <audio loop id={id} src={src}></audio>
      <h3
        className={`text-2xl font-semibold text-center flex gap-2 ${
          playPause ? 'text-amber-300 italic' : ''
        }`}
      >
        {title}
        {playPause ? <FcMusic className='animate-bounce' /> : null}
      </h3>
      <div className='flex justify-between gap-8'>
        <TrackButtons
          icon={playPause ? <FaPause /> : <FaPlay />}
          onClick={() => {
            setPlayPause(!playPause);
            if (audio) {
              playPause ? audio.pause() : audio.play();
            }
          }}
        />
        <TrackButtons
          icon={<FaStop />}
          onClick={() => {
            if (audio) {
              audio.pause();
              audio.currentTime = 0;
              setPlayPause(false);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Track;
