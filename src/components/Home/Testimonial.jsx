import React, { useContext } from 'react';
import Slider from  "react-slick";
import { style } from '../../styles';
import { SiteContext } from '../../context';
import { Testmonialcard } from '../cards';
import { testimonialData } from '../../data/dummy';


const styles = {
  container: 'relative px-[3%] md:py-[5%] py-[8%] text-white z-20',
  subheading: "text-base text-left leading-10",
  splash: "absolute top-[40%] left-0 w-[15rem] h-[15rem] splash -z-10"
}

const Testimonial = () => {
  const { mobile } = useContext(SiteContext);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    initialSlide: 0,
  }
  
  return (
    <div className={styles.container}>
        <h1 className={style.headings2}>What others are saying</h1>
        <p className={styles.subheading}>Become a certified web3 PRO</p>
        {mobile 
        ? <Slider {...settings} className='mt-8'>
            {testimonialData.map((item, index) => (
              <Testmonialcard key={index} {...item} />
              ))}
          </Slider>
        : <div className='flex mt-[2%] px-[5%]'>
            {testimonialData.map((item, index) => (
              <Testmonialcard key={index} {...item} />
            ))}
        </div> }
        <div className={styles.splash}></div>
    </div>
  )
}

export default Testimonial