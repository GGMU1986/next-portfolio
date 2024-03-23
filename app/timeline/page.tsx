'use client';
import React, { useState } from 'react';
import Headline from '../components/Headline';
import TimeLineAndCircles from '../components/TimeLineAndCircles';
import TimelineInfo from '../components/TimelineInfo';
import Modal from '../components/Modal';
import TimelineMoreInfo from '../components/TimelineMoreInfo';
import { TIMELINEMODAL } from '@/constants/timeline';
import { AnimatePresence } from 'framer-motion';

const Timeline = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(-1);
  // Map this after figuring out tailwind bug
  return (
    <div className='relative'>
      <div className='sm:pl-[10%] text-[1.5rem] xl:text-[2.5rem] 2xl:text-[3.1rem] flex sm:justify-start justify-center gap-4'>
        <Headline headline='Experience' />
        <p className='font-bold text-white'>&amp;</p>
        <Headline headline='Education' />
      </div>
      <div className='relative'>
        <TimelineInfo
          id={0}
          type='dev'
          title='Associate Software Engineer'
          place='Aspen Capital - New York, NY'
          date='Aug 2022 - Present'
          className='absolute cursor-pointer left-[17%] top-[3%] sm:top-[7%] lg:top-[5%] sm:left-[60%] lg:left-[60%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={1}
          type='dev'
          title='Software Engineer I'
          place='LynxDx, Inc - Ann Arbor, MI'
          date='Feb 2022 - July 2022'
          className='absolute cursor-pointer left-[17%] top-[13%] sm:top-[14%]  lg:top-[16%] sm:left-[4%] md:left-[12%] lg:left-[10%] xl:left-[16%] 2xl:left-[22%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={2}
          type='school'
          title='Coding Bootcamp'
          place='App Academy - New York, NY'
          date='Nov 2021'
          className='absolute cursor-pointer left-[17%] top-[23%] sm:top-[22%] lg:top-[26%] sm:left-[60%] md:left-[60%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={3}
          type='school'
          title='MA Mathematics'
          place='Queens College - New York, NY'
          date='Sept 2021'
          className='absolute cursor-pointer left-[17%] top-[33%] sm:top-[30%] lg:top-[36%] sm:left-[4%] md:left-[12%] lg:left-[10%] xl:left-[16%] 2xl:left-[22%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={4}
          type='work'
          title='Financial Data Analyst'
          place="Moody's Corporation - New York, NY"
          date='July 2018 - July 2021'
          className='absolute cursor-pointer left-[17%] top-[43%] sm:top-[38%] lg:top-[46%] sm:left-[60%] md:left-[60%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={5}
          type='work'
          title='Assurance Intern'
          place='PriceWaterhouseCoopers - New York, NY'
          date='Jan 2018 - Apr 2018'
          className='absolute cursor-pointer left-[17%] top-[53%] sm:top-[46%] lg:top-[56%] sm:left-[4%] md:left-[12%] lg:left-[10%] xl:left-[16%] 2xl:left-[22%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={6}
          type='work'
          title='Math Adjunct Lecturer'
          place='CUNY - New York, NY'
          date='Aug 2016 - Dec 2017'
          className='absolute cursor-pointer left-[17%] top-[63%] sm:top-[54%] lg:top-[66%] sm:left-[60%] md:left-[60%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={7}
          type='school'
          title='BA Mathematics'
          place='Queens College - New York, NY'
          date='June 2016'
          className='absolute cursor-pointer top-[73%] sm:top-[62%] lg:top-[76%] left-[17%] sm:left-[4%] md:left-[12%] lg:left-[10%] xl:left-[16%] 2xl:left-[22%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimeLineAndCircles />
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

export default Timeline;
