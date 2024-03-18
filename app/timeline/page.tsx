'use client'
import React, { useState } from 'react'
import Headline from '../components/Headline';
import TimeLineAndCircles from '../components/TimeLineAndCircles';
import TimelineInfo from '../components/TimelineInfo'
import Modal from '../components/Modal';
import TimelineMoreInfo from '../components/TimelineMoreInfo';
import { TIMELINEMODAL } from '@/constants/timeline';
import { AnimatePresence } from 'framer-motion';

const timeline = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(-1);
  
  return (
    <div className='h-screen w-screen'>
      <div className='text-[24px] sm:text-[50px] relative'>
        <div className='absolute -top-[1rem] sm:top-[8rem] sm:left-[10%] flex gap-4 z-[9]'>
          <Headline 
            headline='Experience' 
          />
          <p className='font-bold text-white'>&amp;</p>
          <Headline 
            headline='Education' 
          />
        </div>
      </div>
      <div className='relative mt-[5rem] sm:mt-0'>
        <TimelineInfo 
          id={0}
          type='dev' 
          title='Associate Software Engineer' 
          place='Aspen Capital - New York, NY'
          date='Aug 2022 - Present'
          className='absolute top-[4%] sm:top-[5%] left-[10%] sm:left-[60%] cursor-pointer' 
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo 
          id={1}
          type='dev'
          title='Software Engineer I'
          place='LynxDx, Inc - Ann Arbor, MI (Remote from NY)'
          date='Feb 2022 - July 2022'
          className='absolute top-[14%] sm:top-[16%] left-[10%] sm:left-[22%] z-[10] cursor-pointer'
          setShowModal={setShowModal} 
          setIndex={setIndex}
        />
        <TimelineInfo
          id={2}
          type='school' 
          title='Coding Bootcamp' 
          place='App Academy - New York, NY'
          date='Nov 2021'
          className='top-[24%] sm:top-[26%] absolute left-[10%] sm:left-[60%] z-[10] cursor-pointer' 
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={3}
          type='school' 
          title='MA Mathematics' 
          place='Queens College - New York, NY'
          date='Sept 2021' 
          className='top-[34%] sm:top-[36%] absolute left-[10%] sm:left-[22%] z-[10] cursor-pointer'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={4} 
          type='work' 
          title='Financial Data Analyst' 
          place='Moody&apos;s Corporation - New York, NY'
          date='July 2018 - July 2021'
          className='top-[44%] sm:top-[46%] absolute left-[10%] sm:left-[60%] z-[10] cursor-pointer'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo 
          id={5}
          type='work' 
          title='Assurance Intern' 
          place='PriceWaterhouseCoopers - New York, NY'
          date='Jan 2018 - Apr 2018'
          className='top-[54%] sm:top-[56%] absolute left-[10%] sm:left-[22%] z-[10] cursor-pointer'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo
          id={6} 
          type='work' 
          title='Math Adjunct Lecturer' 
          place='CUNY - New York, NY'
          date='Aug 2016 - Dec 2017'
          className='top-[64%] sm:top-[66%] absolute left-[10%] sm:left-[60%] z-[10] cursor-pointer'
          setShowModal={setShowModal}
          setIndex={setIndex}
        />
        <TimelineInfo 
          id={7}
          type='school' 
          title='BA Mathematics' 
          place='Queens College - New York, NY'
          date='June 2016' 
          className='top-[74%] sm:top-[76%] absolute left-[10%] sm:left-[22%] z-[10] cursor-pointer'
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
        ) : <></>}
      </AnimatePresence>
    </div>
  )
}

export default timeline;