import React, { useContext } from 'react';
import Slider from  "react-slick";
import { Link } from 'react-router-dom';
import { style } from '../../styles';
import { SiteContext } from '../../context';
import { tracksData } from '../../data/dummy';
import { Trackcard } from '../cards';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { Button } from '../elements';
import { themes } from '../../theme';

const styles = {
  container: 'px-4 md:py-[8%] py-[10%] text-white',
  icon: 'px-8 md:py-2 py-6'
};

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  arrows: false,
  initialSlide: 0,
}

const Tracks = () => {
  const { mobile, handleButton } = useContext(SiteContext);

  return (
    <div className={styles.container}>
      <h1 className={style.headings1}>Tracks</h1>
      <p className={`${style.subHeading} mt-2`}>
        Choose a track, start your dream career and secure 
        <br/> a high paying job in Web3.
      </p>
      { mobile 
        ? <Slider {...settings} className='mt-8'>
          {tracksData.map((item, index) => (
              <Trackcard key={index} {...item} />
            ))}
        </Slider>
        : <div className='flex mt-[4%]'>
          {tracksData.map((item, index) => (
            <Trackcard key={index} {...item} />
          ))}
        </div>
      }
      <div className={`${style.flexCenter} ${style.flexMobile1} mt-[7%]`}>
          <p className={`${style.subHeading} md:text-left`}>Don’t know where to begin? 
              <br />Take this analysis to get you started right away.</p>
          <div className={styles.icon}>
              {!mobile 
                ? <AiOutlineDoubleRight fontSize={15} className='text-primaryBtn' /> 
                : <BsChevronDoubleDown fontSize={15} className='text-primaryBtn' />
              }
          </div>
          <Link to='/courses'
            onClick={handleButton}
          >
            <Button 
              text='view all courses'
              size='large'
              color={themes.primaryBtn}
            />
          </Link>
      </div>
    </div>
  )
}

export default Tracks