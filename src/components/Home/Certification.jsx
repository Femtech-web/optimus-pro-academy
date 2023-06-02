import React from 'react';
import { style } from '../../styles';
import { Button } from '../elements';
import { themes } from '../../theme';


const styles = {
    container: 'px-4 md:py-[2%] py-[10%] text-white',
    container2: 'justify-evenly md:mt-12 mt-6',
    container3: 'md:w-[40%] w-[100%] relative md:my-0 my-8',
    container4: 'md:w-[30%] w-[100%] flex-col p-3',
    box1: 'flex md:justify-start md:items-start items-center md:w-[30%] w-[100%] min-h-[250px] flex-col p-3',
    heading1: 'archivo font-black text-2xl max-w-[45%] md:text-left tracking-wider text text-center',
    heading2: 'archivo font-black text-2xl max-w-[65%] text-center tracking-wider',
    text1: 'text-sm max-w-[65%] md:text-left mt-3 text-center',
    text2: 'text-sm max-w-[65%] text-center mt-3',
    splash: "absolute top-0 left-0 w-[10rem] h-[10rem] splash",
    cert: 'certBorder absolute w-[70%] h-full',
    btn: "flex justify-center items-center mt-4"
};

const Certification = () => {
  return (
    <div className={styles.container}>
       <h1 className={style.headings1}>Get on-chain certification</h1>
       <div className={`${style.flexMobile2} ${styles.container2} `}>
            <div className={styles.box1}>
                <h1 className={styles.heading1}>
                    BECOME A CERTIFIED WEB3 <span className='text-skyBlue'>PRO</span>
                </h1>
                <p className={styles.text1}>
                    Optimus pro academy has trained 1000+ students in the industry
                    .Begin your journey from newbie to pro.
                </p>
            </div>
            <div className={`${style.flexCenter} ${styles.container3} `}>
                <img src="./images/certificate.png" alt="certificate" className='w-[90%]' />
                <div className={styles.cert}></div>
                <div className={styles.splash}></div>
            </div>
            <div className={`${style.flexCenter} ${styles.container4}`}>
                <h1 className={styles.heading2}>
                    BECOME A  <span className='text-primaryBtn'>PRO</span>
                </h1>
                <p className={styles.text2}>
                    Join millions today and start building your career in Web3.
                </p>

                <div className={styles.btn}>
                    <Button 
                        text='Begin your career'
                        size='large'
                        border={themes.primaryBtn}
                        borderSize='1px'
                        color='transparent'
                    />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Certification