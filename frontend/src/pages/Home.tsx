import React from 'react';
import { Homeheader } from '../component/Homeheader';
import { Navbar } from '../component/Navbar';

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Homeheader />
    </>
  );
};
