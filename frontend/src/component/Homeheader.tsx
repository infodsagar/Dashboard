import React from 'react';

import { Bounce } from './Bounce';
import '../css/Homeheader.css';

export const Homeheader: React.FC = () => {
  return (
    <div
      className='min-h-[100vh] flex flex-col items-center justify-center'
      id='headImg'
    >
      <span
        className='text-6xl md:text-7xl lg:text-8xl xxl:text-8xl text-[#ffffff] rounded-lg py-2 px-8 mt-auto relative'
        id='welcomeId'
      >
        Welcome Home
      </span>

      <span className='mt-[auto] mb-10'>
        <Bounce />
      </span>
    </div>
  );
};
