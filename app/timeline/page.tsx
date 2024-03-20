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
        {/* {TIMELINEFRONT.map((el, i) => {
          return (
            <TimelineInfo
              id={i}
              type={el.type}
              title={el.title}
              place={el.place}
              date={el.date}
              className={el.className}
              setShowModal={setShowModal}
              setIndex={setIndex}
            />
          );
        })} */}
        <TimelineInfo
          id={0}
          type='dev'
          title='Associate Software Engineer'
          place='Aspen Capital - New York, NY'
          date='Aug 2022 - Present'
          className='absolute cursor-pointer left-[10%] top-[4%] sm:top-[5%] sm:left-[60%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={1}
          type='dev'
          title='Software Engineer I'
          place='LynxDx, Inc - Ann Arbor, MI'
          date='Feb 2022 - July 2022'
          className='absolute cursor-pointer left-[10%] top-[14%] sm:top-[16%] sm:left-[22%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={2}
          type='school'
          title='Coding Bootcamp'
          place='App Academy - New York, NY'
          date='Nov 2021'
          className='absolute cursor-pointer left-[10%] top-[24%] sm:top-[26%] sm:left-[60%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={3}
          type='school'
          title='MA Mathematics'
          place='Queens College - New York, NY'
          date='Sept 2021'
          className='absolute cursor-pointer left-[10%] top-[34%] sm:top-[36%] sm:left-[22%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={4}
          type='work'
          title='Financial Data Analyst'
          place="Moody's Corporation - New York, NY"
          date='July 2018 - July 2021'
          className='absolute cursor-pointer left-[10%] top-[44%] sm:top-[46%] sm:left-[60%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={5}
          type='work'
          title='Assurance Intern'
          place='PriceWaterhouseCoopers - New York, NY'
          date='Jan 2018 - Apr 2018'
          className='absolute cursor-pointer left-[10%] top-[54%] sm:top-[56%] sm:left-[22%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={6}
          type='work'
          title='Math Adjunct Lecturer'
          place='CUNY - New York, NY'
          date='Aug 2016 - Dec 2017'
          className='absolute cursor-pointer left-[10%] top-[64%] sm:top-[66%] sm:left-[60%]'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={7}
          type='school'
          title='BA Mathematics'
          place='Queens College - New York, NY'
          date='June 2016'
          className='absolute cursor-pointer top-[74%] sm:top-[76%] left-[10%] sm:left-[22%]'
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

export default timeline;
