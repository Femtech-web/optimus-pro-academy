import React, { useContext } from 'react';
import { style } from '../../styles';
import Form from './Form';
import { SiteContext } from '../../context';


const Auths = () => {
  const { isSignUp } = useContext(SiteContext);
 
  return (
    <div className={`${style.flexCenter}`}>
      <div className='flex '>
        <div className={`${style.flexEnd} md:flex hidden w-[50%] py-[5%] `}>
          {isSignUp 
            ? <img src="/images/signup.png" alt="signup image" className='w-full' /> 
            : <img src="/images/login.png" alt="login image" className='w-full' /> 
          }
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Auths