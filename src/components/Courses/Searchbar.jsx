import React from 'react';
import { style } from '../../styles';
import { BiSearchAlt2 } from 'react-icons/bi';


const styles = {
    input: 'outline-none bg-inputBg p-3 rounded-full text-sm pl-10',
    icon: 'absolute top-[30%] left-4 cursor-pointer',
    heading: 'md:text-3xl text-2xl font-black archivo md:block hidden',
    wrapper: 'md:justify-between flex items-center justify-end'
};

const Searchbar = () => {
  return (
    <div className={`${style.pageX} py-8`}>
        <div className={`${styles.wrapper} `}>
            <p className={styles.heading}>Learn Web3</p>
            <div className='relative'>
                <input 
                    type="text" 
                    className={styles.input}
                    placeholder='Search for a track'
                />
                <BiSearchAlt2 fontSize={20} className={styles.icon} />
            </div>
        </div>
        <hr className='mt-4'/>
    </div>
  )
}

export default Searchbar