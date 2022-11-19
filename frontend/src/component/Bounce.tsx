import React from 'react';
import '../css/Bounce.css';

export const Bounce: React.FC = () => {
  return (
    <div className='containerBounce'>
      <div className='mainDiv'>
        <div className='subDiv'></div>
      </div>
      <div className='linedown mt-4'></div>
    </div>
  );
};
