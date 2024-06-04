import React from 'react';

interface DrumKeyTypes {
  id: string;
  src: string;
  letter: string;
  piece: string;
}

const DrumKey: React.FC<DrumKeyTypes> = ({ id, src, letter, piece }) => {
  return (
    <div
      id={`drum-key-${id}`}
      className='border-4 rounded-xl w-[127px] h-[75px]'
    >
      <audio id={id} src={src} />
      <div className='flex flex-col items-center mt-1  font-bold text-lg text-white'>
        <p>{letter}</p>
        <p>{piece}</p>
      </div>
    </div>
  );
};

export default DrumKey;
