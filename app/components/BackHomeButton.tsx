import Link from 'next/link'
import React from 'react'

interface BackHomeButtonProps {
  className?: string;
}

const BackHomeButton: React.FC<BackHomeButtonProps> = ({ className }) => {
  return (
    <Link href='/'>
      <button className={`bg-white hover:bg-slate-700 hover:text-white hover:italic text-black font-bold rounded fixed ${className}`}>
        Back Home
      </button>
    </Link>
  )
}

export default BackHomeButton;