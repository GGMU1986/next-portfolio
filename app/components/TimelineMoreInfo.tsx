'use client';
import React, { ReactElement, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { GrClose } from 'react-icons/gr';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdOutlineWork } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import ResumePictures from './ResumePictures';
import NextButton from './NextButton';
import { ModalData } from '../types';

interface TimelineMoreInfoProps {
  data: ModalData;
  setShowModal: (state: boolean) => void;
}

const TimelineMoreInfo: React.FC<TimelineMoreInfoProps> = ({
  data,
  setShowModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [next, setNext] = useState(false);

  useEffect(() => {
    const mouseHandler = (e: any) => {
      if (modalRef.current && !modalRef.current?.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', mouseHandler);
    return () => {
      document.removeEventListener('click', mouseHandler);
    };
  });

  const dropInOut = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 120,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  return (
    <motion.div
      ref={modalRef}
      key={data.id}
      variants={dropInOut}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`z-[20] w-[70rem] p-8 rounded-lg ${
        data.type === 'school'
          ? 'bg-blue-500'
          : data.type === 'work'
          ? 'bg-blue-700'
          : 'bg-cyan-900'
      }`}
    >
      <div className='flex items-center justify-between'>
        <div className='relative text-white text-3xl'>
          {data.type === 'school' ? (
            <IoSchoolSharp />
          ) : data.type === 'work' ? (
            <MdOutlineWork />
          ) : (
            <FaCode />
          )}
        </div>
        <GrClose
          className='relative text-2xl cursor-pointer text-white z-[21]'
          onClick={() => setShowModal(false)}
        />
      </div>
      {next ? (
        <ResumePictures
          setNext={setNext}
          picsArray={data.pics ? data.pics : []}
        />
      ) : (
        <>
          <div className='flex flex-col text-white py-2 mt-4 gap-2'>
            <div className='flex justify-between items-center text-2xl font-semibold'>
              <p>{data.company}</p>
              <p>{data.place}</p>
            </div>
            <div className='flex justify-between items-center text-xl italic'>
              <p>{data.title}</p>
              <p>{data.date}</p>
            </div>
          </div>
          <div className='px-8 flex flex-col text-white mt-4'>
            {data.bullets ? (
              <ul>
                {data.bullets.map((bullet: string, i: number): ReactElement => {
                  return (
                    <li key={i} className='mt-4 text-md'>
                      {bullet}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className='gap-4'>
                {data.company === 'App Academy' ? (
                  <></>
                ) : (
                  <p className='text-2xl font-semibold'>Courses completed:</p>
                )}
                <p className='text-xl'>{data.classesTaken}</p>
              </div>
            )}
          </div>
          {data.id === 0 ? <NextButton setNext={setNext} /> : <></>}
        </>
      )}
    </motion.div>
  );
};

export default TimelineMoreInfo;
