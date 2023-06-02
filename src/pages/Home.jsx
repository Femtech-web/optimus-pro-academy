import React from 'react';
import { LandPage, Start, Tracks, Upskilled, 
 Trending, Certification, Testimonial, Ecosystem,
 Update, Brands } from '../components/Home';
 import { Footer } from '../components/elements';

const Home = () => {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <LandPage />
      <div className='flex flex-col bg-mainBg'>
        <Start />
        <Tracks />
        <Upskilled />
        <Trending />
        <Certification />
        <Testimonial />
        <Ecosystem />
        <Update />
        <Brands />
        <Footer />
      </div>
    </div>
  )
}

export default Home