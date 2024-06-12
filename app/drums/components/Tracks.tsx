'use client'
import React, { useEffect, useState } from 'react'

import { FcMusic } from 'react-icons/fc';
import { FaStop, FaPlay, FaPause } from 'react-icons/fa';
import TrackButtons from './TrackButtons';

const TracksV2 = () => {
  const [playPause1, setPlayPause1] = useState<boolean>(false);
  const [playPause2, setPlayPause2] = useState<boolean>(false);
  const [playPause3, setPlayPause3] = useState<boolean>(false);
  let track1!: HTMLAudioElement | null;
  let track2!: HTMLAudioElement | null;
  let track3!: HTMLAudioElement | null;
  useEffect(() => {
    track1 = document.querySelector('#track1');
    track2 = document.querySelector('#track2');
    track3 = document.querySelector('#track3');
  });
  return (
    <div className='ml-10 border-4 border-white rounded-xl text-white inline-block p-4 h-fit'>
      <h1 className='text-3xl font-bold'>Drumless Tracks</h1>
      <div className='mt-4 flex flex-col gap-2'>
        <div className='flex justify-between'>
          <audio loop id='track1' src='/sounds/track1.wav' className='track'></audio>
          <h3
            className={`text-2xl font-semibold text-center flex gap-2 ${
              playPause1 ? 'text-amber-300 italic' : ''
            }`}
          >
            Track 1
            {playPause1 ? <FcMusic className='animate-bounce' /> : null}
          </h3>
          <div className='flex justify-between gap-8'>
            <TrackButtons
              icon={playPause1 ? <FaPause /> : <FaPlay />}
              onClick={() => {
                setPlayPause1(!playPause1);
                setPlayPause2(false);
                setPlayPause3(false);
                if (track2) {
                  track2.pause();
                }
                if (track3) {
                  track3.pause();
                }
                if (track1) {
                  playPause1  ? track1.pause() : track1.play();
                }
              }}
            />
            <TrackButtons
              icon={<FaStop />}
              onClick={() => {
                if (track1) {
                  track1.pause();
                  track1.currentTime = 0;
                  setPlayPause1(false);
                }
              }}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <audio loop id='track2' src='/sounds/track2.wav' className='track'></audio>
          <h3
            className={`text-2xl font-semibold text-center flex gap-2 ${
              playPause2 ? 'text-amber-300 italic' : ''
            }`}
          >
            Track 2
            {playPause2 ? <FcMusic className='animate-bounce' /> : null}
          </h3>
          <div className='flex justify-between gap-8'>
            <TrackButtons
              icon={playPause2 ? <FaPause /> : <FaPlay />}
              onClick={() => {
                setPlayPause2(!playPause2);
                setPlayPause1(false);
                setPlayPause3(false);
                if (track1) {
                  track1.pause();
                }
                if (track3) {
                  track3.pause();
                }
                if (track2) {
                  playPause2  ? track2.pause() : track2.play();
                }
              }}
            />
            <TrackButtons
              icon={<FaStop />}
              onClick={() => {
                if (track2) {
                  track2.pause();
                  track2.currentTime = 0;
                  setPlayPause2(false);
                }
              }}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <audio loop id='track3' src='/sounds/track3.wav' className='track'></audio>
          <h3
            className={`text-2xl font-semibold text-center flex gap-3 ${
              playPause3 ? 'text-amber-300 italic' : ''
            }`}
          >
            Track 3
            {playPause3 ? <FcMusic className='animate-bounce' /> : null}
          </h3>
          <div className='flex justify-between gap-8'>
            <TrackButtons
              icon={playPause3 ? <FaPause /> : <FaPlay />}
              onClick={() => {
                setPlayPause3(!playPause3);
                setPlayPause1(false);
                setPlayPause2(false);
                if (track1) {
                  track1.pause();
                }
                if (track2) {
                  track2.pause();
                }
                if (track3) {
                  playPause3  ? track3.pause() : track3.play();
                }
              }}
            />
            <TrackButtons
              icon={<FaStop />}
              onClick={() => {
                if (track3) {
                  track3.pause();
                  track3.currentTime = 0;
                  setPlayPause3(false);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TracksV2;