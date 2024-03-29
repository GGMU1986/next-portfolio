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
  const [next, setNext] = useState<boolean>(false);

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
      className={`z-[8] lg:w-[70%] w-fit p-8 rounded-lg ${
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
          className='relative text-2xl cursor-pointer text-white z-[11]'
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
          <div className='flex flex-col text-white gap-2 mt-4 py-2  relative'>
            {data.id === 0 ? (
              <p className='xl:hidden text-center text-amber-300 text-[1.2rem]'>
                View on larger screen for more information
              </p>
            ) : (
              <></>
            )}
            <div className='flex flex-col lg:flex-row justify-between items-center text-[1.4rem] lg:text-2xl font-semibold'>
              <div className='xl:hidden'>
                {data.company ===
                'City University of New York at Queens College' ? (
                  <p>CUNY Queens College</p>
                ) : (
                  <p>{data.company}</p>
                )}
              </div>
              <p className='hidden xl:block'>{data.company}</p>
              <p
                className={`${
                  data.id === 1 ? 'text-[1.1rem] lg:text-2xl' : ''
                }`}
              >
                {data.place}
              </p>
            </div>
            <div
              className={`flex flex-col lg:flex-row justify-between items-center ${
                data.id === 0 ? 'text-[1rem]' : 'text-[1.2rem]'
              } lg:text-xl italic`}
            >
              <div className='lg:hidden'>
                {data.title ===
                'Bachelor of Arts in Mathematics with Honors' ? (
                  <p>BA Mathematics with Honors</p>
                ) : (
                  <p>{data.title}</p>
                )}
              </div>
              <p className='hidden lg:block'>{data.title}</p>
              <p>{data.date}</p>
            </div>
          </div>
          <div className='px-4 lg:px-8 flex flex-col text-white mt-4'>
            {data.bullets ? (
              <ul>
                {data.bullets.map((bullet: string, i: number): ReactElement => {
                  return (
                    <li
                      key={i}
                      className={`${
                        i > 0 && data.id === 0 ? 'mobile-list' : ''
                      } mt-4 text-sm lg:text-md lg:list-disc`}
                    >
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
                <p className='text-lg lg:text-xl'>{data.classesTaken}</p>
              </div>
            )}
          </div>
          <div className='hidden xl:block'>
            {data.id === 0 ? <NextButton setNext={setNext} /> : <></>}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default TimelineMoreInfo;
