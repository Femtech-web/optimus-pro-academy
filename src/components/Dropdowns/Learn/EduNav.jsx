import React, { useContext } from 'react';
import { SiteContext } from '../../../context';
import { BsArrowLeft } from 'react-icons/bs';
import { EduResources } from '.';


const EduNav = () => {
  const { setMobileSubmenu } = useContext(SiteContext);

  return (
    <div className='absolute bg-mainBg  top-0 rounded-lg left-0 min-h-[90vh] w-full flex justify-evenly px-8 flex-col'>
      <BsArrowLeft  
        fontSize={20} 
        className='text-white cursor-pointer mb-8'
        onClick={() => setMobileSubmenu(false)}
      />
      <EduResources />
    </div>
  )
}

export default EduNav