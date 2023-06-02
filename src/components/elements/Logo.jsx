import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiteContext } from '../../context';

const Logo = ({ width }) => {
  const { handleButton } = useContext(SiteContext);

  return (
    <Link to='/'
      onClick={handleButton}
    >
      <div className='cursor-pointer' style={{width: `${width}`}}>
          <img src="/images/logo.png" alt="optimum-pro logo" className='w-full' />
      </div>
    </Link>
  )
}

export default Logo