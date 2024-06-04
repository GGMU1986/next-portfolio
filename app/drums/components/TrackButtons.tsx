import React from 'react';

interface TrackButtonsType {
  icon: any;
  onClick: () => void;
}

const trackButtons: React.FC<TrackButtonsType> = ({ icon, onClick }) => {
  return (
    <button className='hover:text-amber-300' onClick={onClick}>
      {icon}
    </button>
  );
};

export default trackButtons;
