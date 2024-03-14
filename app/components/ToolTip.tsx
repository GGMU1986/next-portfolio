import React, { ReactNode } from 'react'

interface ToolTipProps {
  children: ReactNode;
  toolTip?: string;
  className?: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ children, toolTip, className }): JSX.Element => {
  return (
    <div className='group relative inline-block'>
      {children}
      <span className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-transparent rounded p-2 absolute bottom-full ${className}`}>{toolTip}</span>
    </div>
  )
}

export default ToolTip;