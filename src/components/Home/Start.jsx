import React from 'react';
import { style } from '../../styles';
import { Startcard } from '../cards';
import { startData } from '../../data/dummy';

const styles = {
  container: 'relative md:px-[15%] px-[8%] py-[3%] text-white z-0 overflow-hidden',
  card: 'md:mt-[8%] mt-[12%]',
  spring: 'absolute top-4 left-0 md:block hidden',
  splash: 'absolute top-[30%] left-[50%] w-[15rem] h-[15rem] splash'
}

const Start = () => {
  return (
    <div className={styles.container}>
      <h1 className={style.headings1}>Your Start</h1>
      <div className={`${style.flexMobile2} ${styles.card}`}>
        {startData.map((item, index) => (
            {...index === 1 
            ? <Startcard key={index} {...item} translate={true} />
            : <Startcard key={index} {...item} />
            }
        ))}
      </div>
      <div className={styles.spring}>
        <img 
          src="/images/spring.png" 
          alt="A Spring" 
          className='w-[19%]'  
        />
      </div>
      <div className={styles.splash}></div>
    </div>
  )
}

export default Start