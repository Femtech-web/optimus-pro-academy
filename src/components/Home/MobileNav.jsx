import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themes } from '../../theme';
import { SiteContext } from '../../context';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import { NavLinks } from '../../data/dummy';
import { Button } from '../elements';
import { LearnDropdown, CommunityDropdown } from '.';

const MobileNav = () => {
    const { mobile, setMobile,
    hideLearn, setMobileNav, 
    currentDropDown, mobileSubmenu, 
    dropDown, setHideLearn,
    handleMouseOut, setMobileSubmenu,
    handleMore, isSignUp, handleButton }
    = useContext(SiteContext);

  return (
    <div className='flex flex-col justify-start w-full top-0 left-0 px-4
        bg-mainBg text-white min-h-[90vh] rounded-lg absolute z-30'>
        <div className='flex justify-between items-center p-[4%]'>
            <AiOutlineClose 
                fontSize={25} 
                className='mx-8 cursor-pointer'
                onClick={() => setMobileNav(false)}
            />
            <BiSun 
                fontSize={25} 
                className='cursor-pointer'
            />
        </div>
        <ul className='flex flex-col text-white mt-12'>
            {NavLinks.map((item, index) => (
                <div className='flex flex-col py-4 mx-6'>
                    <li className='flex items-center justify-between cursor-pointer'
                        onClick={() => handleMore(item.title)}
                    >
                        {item.title} 
                        {item.icon && <MdOutlineArrowForwardIos 
                            fontSize={20} 
                            className='text-white'
                        />}
                    </li>
                    {
                     index === 0 && dropDown.learn 
                     ? <LearnDropdown 
                            handleMouseOut={handleMouseOut} 
                            current={currentDropDown} 
                            mobile={mobile}
                            setMobile={setMobile} 
                            setHideLearn={setHideLearn}
                            hideLearn={hideLearn}
                            setMobileSubmenu={setMobileSubmenu}
                            mobileSubmenu={mobileSubmenu}
                        />
                     : index === 2 
                     ? <div className='absolute -bottom-8 hidden'><CommunityDropdown /></div> 
                     : null
                    }
                </div>
            ))}
        </ul>

        <Link to='/auth'
            onClick={handleButton}
            className='absolute bottom-0 w-[90%] text-center'>
            <Button 
                text={ isSignUp ? 'Get Started' : 'Log in'}
                color={themes.primaryBtn}
                others='mb-4'
            />
        </Link>
    </div>
  )
}

export default MobileNav