import React from 'react';
import { Link } from 'react-router-dom';
import { style } from '../../styles';
import { themes } from '../../theme';
import { Button } from '../elements';
import { AiOutlineArrowDown } from 'react-icons/ai';


const styles = {
    container: 'md:justify-start md:flex-nowrap flex-wrap py-[10%] px-[5%] relative z-20 ',
    subContainer: 'md:items-start text-center md:-translate-y-8 -translate-y-0',
    ctaBtn1: 'text-white text-5xl font-[1000] leading-none md:text-left text-center md:mb-2 mb-0',
    ctaBtn2: 'text-primaryBtn text-8xl font-[1000] leading-[4.5rem] md:text-left text-center',
    ctaText: 'text-base text-white leading-6 md:text-left text-center',
    img: 'md:right-[7%] md:-top-[1%]',
    arrow: 'cursor-pointer border-primaryBtn px-4 py-10 md:right-1 md:mt-0 mt-6 md:bottom-12 border-[1px]'
};


const Body = () => {

  return (
    <div className={`${style.flexMobile1} ${style.flexCenter} ${styles.container}`}>
        <div className={`${style.flexY} ${style.widthMobile} ${styles.subContainer}`}> 
            <div className='archivo md:my-4 my-0'>
                <h1 className={styles.ctaBtn1}>DREAM</h1>
                <h1 className={styles.ctaBtn2}>WEB3</h1>
            </div>
            <div className='mt-6'>
                <p className={styles.ctaText}>Kickstart your career with our first-rate 
                <br/> edu-platform for all Web3 learning resources.</p>
            </div>
            <div className='mt-6'>
                <Link to='/auth'>
                    <Button 
                        text='start now for free'
                        color={themes.primaryBtn}
                        size='large'
                        others='mb-4'
                    />
                </Link>
                <Button 
                    text='video'
                    textColor={themes.primaryBtn}
                    size='large'
                    others="ml-[10px] mb-10 bg-white"
                />
            </div>
        </div>
        <div className={`${style.position} ${style.widthMobile} ${styles.img}`}>
            <img 
                src="/images/bulb.png" 
                alt="image of a rocket" 
                className='rotate-[270deg] w-[92%]'
            />
        </div>

        <div className={`${style.position} ${styles.arrow}`}>
            <AiOutlineArrowDown fontSize={25} className='text-skyBlue'/>
        </div>
    </div>
  )
}

export default Body