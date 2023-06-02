import React from 'react';
import { Brands } from '../components/Home';
import { Navbar, Footer } from '../components/elements';
import { Searchbar, Featured, Tracks } from '../components/Courses';

const Courses = () => {

  return (
    <div className='bg-coursesBg relative text-white overflow-x-hidden'>
        <Navbar />
        <Searchbar />
        <Featured />
        <Tracks />
        <Brands />
        <Footer />
    </div>
  )
}

export default Courses