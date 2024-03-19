"use client"
import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

interface ModalProps {
  children: JSX.Element;
  showModal: boolean;
  setShowModal: (state: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        setShowModal(false);
      }
    }
  
    document.addEventListener('keydown', escHandler);
    return () => {
      document.removeEventListener('keydown', escHandler);
    }
  })
  
  return (
    <motion.div
      ref={modalRef} 
      className={`fixed inset-0 w-screen h-screen bg-black/75 flex items-center justify-center z-[12] ${showModal ? 'overflow-y-hidden' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Modal;