'use client';
import { TIMELINEFRONT, TIMELINEMODAL } from '@/constants/timeline';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Headline from '../components/Headline';
import Modal from '../components/Modal';

import TimelineInfo from '../components/TimelineInfo';
import TimelineMoreInfo from '../components/TimelineMoreInfo';

const Timeline = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState<number>(-1);

  return (
    <div className='relative max-w-[80%] mx-[20px] sm:mx-[50px] md:mx-[100px] my-auto timeline'>
      <div className='pl-[18%] mb-[5%] sm:mb-0 sm:pl-0 md:pl-[10%] text-[1.5rem] xl:text-[2.5rem] 2xl:text-[3.1rem] flex sm:justify-start justify-center gap-3 md:gap-4'>
        <Headline headline='Experience' />
        <p className='font-bold text-white'>&amp;</p>
        <Headline headline='Education' />
      </div>
      {TIMELINEFRONT.map((el, i) => {
        return (
          <div key={i}>
            <TimelineInfo
              id={i}
              type={el.type}
              title={el.title}
              place={el.place}
              date={el.date}
              src={el.src}
              alt={el.alt}
              setShowModal={setShowModal}
              setIndex={setIndex}
            />
          </div>
        );
      })}
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

export default Timeline;
