import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { style } from '../../styles';
import { SiteContext } from '../../context';
import { themes } from '../../theme';
import { NavLinks } from '../../data/dummy';
import { Button, Logo } from '../elements';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { BiSun, BiSearchAlt2 } from 'react-icons/bi';
import {LearnDropdown, CommunityDropdown, MobileNav } from '../Home';

const styles = {
    container: 'flex relative py-4 z-30 text-white',
    contMobile: 'justify-between w-full items-start ',
    contWeb: 'justify-evenly items-center'
};

const Navbar = () => {
    const {mobile, mobileNav, 
    setMobileNav, dropDown, 
    handleMouseHover, isSignUp } = useContext(SiteContext);

  return (
    <div className={`${!mobile ? styles.contWeb : styles.contMobile} ${styles.container}`}>
       <Logo width='150px' />
        <ul className={`flex ${mobile && 'hidden'}`}>
            {NavLinks.map((item, index) => (
                <div className={`${style.flexY} py-4 mx-6`}>
                    <li className={`${style.flexEvenly} cursor-pointer`}
                        onMouseOver={() => handleMouseHover(item.title)}
                    >
                        {item.title} {item.icon && item.icon}
                    </li>
                    {index === 0 && dropDown.learn 
                    ? <LearnDropdown  />
                    : index === 2 
                    ? <div className='absolute -bottom-8 hidden'><CommunityDropdown /></div> 
                    : null}
                </div>
            ))}
        </ul>
        <div className={`${style.flexEvenly} ${mobile && 'hidden'}`}>
            <Link to='/auth'>
                <Button 
                    text={isSignUp ? 'Get Started' : 'Log in'}
                    color={themes.primaryBtn}
                    size='normal'
                />
            </Link>
            <BiSun fontSize={25} className='mx-8 cursor-pointer'/>
            <BiSearchAlt2 fontSize={25} className='cursor-pointer'/>
        </div>
        {mobile && 
            <div className={style.flexY}>
                {!mobileNav && <HiOutlineMenuAlt3 
                    fontSize={25} 
                    className='cursor-pointer mr-8 '
                    onClick={() => setMobileNav(true)}
                />}
                {mobileNav 
                && <MobileNav />}
            </div>
        }
    </div>
  )
}

export default Navbar