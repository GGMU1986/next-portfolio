import React from 'react'

import { motion } from 'framer-motion';

import { GrFormNextLink } from "react-icons/gr";

interface NextButtonProps {
  setNext: (state: boolean) => void;
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)'
  }
}

const NextButton: React.FC<NextButtonProps> = ({ setNext }) => {

  return (
    <div 
      className='flex justify-end'
    >
      <motion.button
        variants={buttonVariants}
        whileHover='hover'
        onClick={() => setNext(true)}
        className='w-fit h-8 p-4 border bg-black text-white rounded flex mt-8 items-center gap-2'
      >
        <p>Next</p>
        <GrFormNextLink className='text-[25px]' />
      </motion.button>
    </div>
  )
}

export default NextButton;