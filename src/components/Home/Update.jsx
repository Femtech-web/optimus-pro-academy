import React, { useContext } from 'react';
import Slider from  "react-slick";
import { style } from '../../styles';
import { SiteContext } from '../../context';
import { Updatecard } from '../cards';
import { updatesData } from '../../data/dummy';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  container: 'px-4 md:py-[2%] py-[12%] text-white',
};

const Update = () => {
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
        <h1 className={style.headings2}>Stay updated on web3</h1>
        <p className={`${style.subHeading2} leading-10`}>Keep up with the latest in the Web3 ecosystem.</p>
        { mobile 
          ? <Slider {...settings} className='mt-8'>
              {updatesData.map((item, index) => (
                  <Updatecard key={index} {...item} />
                ))}
          </Slider>
          : <div className='flex mt-[2%] justify-center'>
              {updatesData.map((item, index) => (
                <Updatecard key={index} {...item} />
              ))}
            </div>
          }
    </div>
  )
}

export default Update