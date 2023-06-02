import React from 'react';
import { Navbar, Auths } from '../components/elements';

const Auth = () => {
  return (
    <div className='bg-mainBg relative text-white overflow-hidden min-h-screen'>
      <Navbar />
      <Auths />
    </div>
  )
}

export default Auth