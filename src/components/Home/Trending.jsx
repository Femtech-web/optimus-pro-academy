import React, { useContext } from 'react';
import { style } from '../../styles';
import Slider from  "react-slick";
import { SiteContext } from '../../context';
import { Trendingcard } from '../cards';
import { coursesData } from '../../data/dummy'

const styles = {
  container: 'relative px-4 py-[5%] md:pb-10 pb-[12%] text-white z-20',
  splash: 'absolute bottom-0 right-[20%] w-[15rem] h-[15rem] splash -z-10'
};

const Trending = () => {
  const { mobile } = useContext(SiteContext);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    initialSlide: 0,
  };
  

  return (
    <div className={styles.container}>
        <h1 className={style.headings1}>Trending courses</h1>
        <p className={`${style.subHeading} leading-10`}>Web3 professional are in high demand </p>
          { mobile 
          ? <Slider {...settings} className='mt-8'>
              {coursesData.map((item, index) => (
                  <Trendingcard key={index} {...item} />
                ))}
          </Slider>
          : <div className='flex mt-[2%]'>
              {coursesData.map((item, index) => (
                <Trendingcard key={index} {...item} />
              ))}
            </div>
          }
        <div className={styles.splash}></div>
    </div>
  )
}

export default Trending