import React from 'react'

interface HeadlineProps {
  headline: string;
  className?: string
}

const Headline: React.FC<HeadlineProps> = ({ headline, className }) => {
  return (
    <div className={`animate-pulse font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-cyan-500 ${className}`}>
      {headline}
    </div>
  )
}

export default Headline;