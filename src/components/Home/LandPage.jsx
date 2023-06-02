import React from 'react';
import { Navbar } from '../elements';
import  { Body } from '.'

const LandPage = () => {

  return (
    <div className={`min-h-screen md:h-screen w-full bg-[url('/images/background.jpg')] bg-cover relative z-0`}>
      <Navbar />
      <Body />
      <div className='absolute top-0 left-0 w-full h-full bg-sky-600 z-10 mix-blend-overlay'></div>
    </div>
  )
}

export default LandPage