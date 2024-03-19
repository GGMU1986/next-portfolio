import React from 'react';

interface TimeLineAndCirclesProps {
  length: number;
  className?: string;
}

const TimeLineAndCircles: React.FC<TimeLineAndCirclesProps> = ({
  length,
  className,
}) => {
  const topPercentage = 10;

  return (
    <div className='w-1 h-[120rem] bg-black rounded relative left-[50%]'>
      {Array.from({ length }, (_, i) => i + 1).map((el) => {
        return (
          <div
            className={`absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-[${
              topPercentage * el
            }%]`}
          />
        );
      })}
    </div>
  );
};

export default TimeLineAndCircles;
