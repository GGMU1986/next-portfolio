'use client';
import React, { useState } from 'react';
import Headline from '../components/Headline';
import TimeLineAndCircles from '../components/TimeLineAndCircles';
import TimelineInfo from '../components/TimelineInfo';
import Modal from '../components/Modal';
import TimelineMoreInfo from '../components/TimelineMoreInfo';
import { TIMELINEFRONT, TIMELINEMODAL } from '@/constants/timeline';
import { AnimatePresence } from 'framer-motion';

const timeline = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(-1);

  return (
    <div className='h-screen w-screen'>
      <div className='text-[24px] sm:text-[50px] relative'>
        <div className='absolute -top-[1rem] sm:top-[8rem] sm:left-[10%] flex gap-4 z-[9]'>
          <Headline headline='Experience' />
          <p className='font-bold text-white'>&amp;</p>
          <Headline headline='Education' />
        </div>
      </div>
      <div className='relative mt-[5rem] sm:mt-0'>
        {TIMELINEFRONT.map((el, i) => {
          return (
            <TimelineInfo
              id={i}
              type={el.type}
              title={el.title}
              place={el.place}
              date={el.date}
              className={`absolute cursor-pointer left-[10%] ${
                !(i % 2) ? 'sm:left-[60%]' : 'sm:left-[22%]'
              } ${el.className}`}
              setShowModal={setShowModal}
              setIndex={setIndex}
            />
          );
        })}
        <TimeLineAndCircles length={TIMELINEFRONT.length} />
      </div>
      <AnimatePresence>
        {showModal ? (
          <Modal showModal={showModal} setShowModal={setShowModal} key='modal'>
            <TimelineMoreInfo
              setShowModal={setShowModal}
              data={TIMELINEMODAL[index]}
            />
          </Modal>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
};

export default timeline;
