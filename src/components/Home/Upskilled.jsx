import React from 'react';
import { style } from '../../styles';
import { upSkill } from '../../data/dummy';
import { MdOutlineRocketLaunch } from 'react-icons/md';


const styles = {
    container: 'relative px-[12%] md:py-12 py-[20%] text-white ',
    splash: 'absolute top-5 left-5 w-[20rem] h-[20rem] splash'
};

const Upskilled = () => {
  return (
    <div className={styles.container}>

        <h1 className={style.headings1}>Get  upskilled  for  web3</h1>
        <p className={`${style.subHeading} mt-2`}>
            Acquire 
            <span className='text-primaryBtn ml-1'>HANDS-ON</span> 
            practical work experience building 
            <br /> projects in real dev teams.
        </p>

        <div className={`${style.flexBtw} ${style.flexMobile1} md:mt-10 mt-12`}>
            <div className={`${style.flexY} ${style.widthMobile}`}>
                {upSkill.map((item) => (
                    <div className='flex mb-6'>
                        <MdOutlineRocketLaunch 
                            fontSize={18} 
                            className='mr-4' 
                        />
                        <span className='text-lg'>{item}</span>
                    </div>
                ))}
            </div>

            <div className={`${style.widthMobile} md:mt-0 mt-5`}>
                <img 
                    src="./images/kids.jpg" 
                    alt="kids handling computer" 
                    className='' 
                />
            </div>
            
        </div>
        <div className={styles.splash}></div>
    </div>
  )
}

export default Upskilled