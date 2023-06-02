import React, { useContext } from 'react';
import Slider from  "react-slick";
import { style } from '../../styles';
import { Button } from '../elements';
import { themes } from '../../theme';
import { FeaturedTracksData } from '../../data/dummy';
import { Featuredcard } from '../cards'
import { AiOutlineAlert } from 'react-icons/ai';
import { SiteContext } from '../../context';


const styles = {
    blue: 'text-primaryBtn ml-1 font-semibold',
};

const Featured = () => {
    const { mobile } = useContext(SiteContext);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        initialSlide: 0,
        arrows: mobile ? false : true
    };

  return (
    <div className={`${style.pageX} pb-8`}>
        <h1 className={style.headings1}>
            Featured Tracks
        </h1>
        <p className={`${style.subHeading} mt-2`}>
            Choose a 
            <span className={styles.blue}>TRACK </span>  
            start your dream career and secure a high paying job in Web3
        </p>

        <Slider {...settings} className='mt-8'>
            {FeaturedTracksData.map((item, index) => (
                <Featuredcard key={index} {...item} />
            ))}
        </Slider>
    </div>
  )
}

export default Featured