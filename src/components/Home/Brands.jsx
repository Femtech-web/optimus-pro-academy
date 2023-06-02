import React from 'react';
import { style } from '../../styles';
import { brandsData } from '../../data/dummy'


const styles = {
  container: 'bg-brandBg my-[2%] mx-4 px-[7%] py-[5%] text-white overflow-clip',
};

const Brands = () => {
  return (
    <div className={styles.container}>
      <div className={`${style.flexCenter} w-full swipe h-full`}>
        {brandsData.map((item) => (
            <div className='mx-6'>
                <div className={`${style.flexCenter} cursor-pointer`}>
                    <span className='mr-2'>{item.icon}</span>
                    <p className='text-lg'>{item.name}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Brands