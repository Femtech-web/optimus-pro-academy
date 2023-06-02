import React from 'react';
import { style } from '../../styles';
import { Button } from '../elements';
import { themes } from '../../theme';
import { statData } from '../../data/dummy';


const styles = {
    container: 'px-4 md:py-[2%] py-[20%] text-white',
    topBtn: 'rounded-full px-8 md:py-2 py-4 ml-4 text-white md:my-0 my-2 hover:shadow-btnShadow transition-all',
    leftText: 'flex flex-col items-start md:w-[40%] w-[100%]',
    text: 'text-sm md:max-w-[70%] max-w-full leading-5',
    read: 'text-primaryBtn text-sm md:mt-8 mt-4 cursor-pointer hover:underline',
    imgContainer: 'relative flex md:w-[60%] w-[100%] md:mt-0 mt-8',
    img: 'w-[90%] rounded-xl cursor-pointer z-40',
    splash: "absolute -top-[20%] -left-8 w-[20rem] h-[20rem] splash z-10",
    others:' w-[30%] min-h-[150px] flex flex-col items-center md:px-6 px-2 md:ml-0 ml-2',
    statHead: 'font-black md:text-lg text-sm archivo tracking-wider',
}

export const TopButton = ({text, color, others }) => {
    return (
        <button type='button' 
            style={{backgroundColor : `${color}`}}
            className={`${styles.topBtn} ${others}`}
        >
            {text}
        </button>
    )
}

const Ecosystem = () => {
  return (
    <div className={styles.container}>
        <h1 className={style.headings1}>Join our ecosystem</h1>
        <p className={`${style.subHeading} mt-2`}>Join one of the fastest growing Web3 community
         of mentors, learners, <br /> and innovators working together to build the future.
        </p>

        <div className={`${style.flexY} justify-start mt-8`}>
            <div className={`${style.flexMobile2} md:my-0 my-4`}>
                <TopButton 
                    text='infrastructure'
                    color='#0081FF'
                />
                <TopButton 
                    text='Academy'
                    color='#595A5B'
                />
                <TopButton 
                    text='studio'
                    color='#595A5B'
                />
            </div>

            <div className={`${style.flexMobile2} mt-12`}>
                <div className={styles.leftText}>
                    <h1 className='font-black '>Infrastructure</h1>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur. Scelerisque eu in amet cras elementum fringilla.
                        Id vulputate enim orci tristique congue. Lectus purus et lectus ac. 
                        Semper amet erat facilisis euismod sit molestie massa pellentesque.
                        Risus maecenas et in dictum. Consectetur id gravida ultricies tempor 
                        in arcu nulla mauris porttitor. Arcu adipiscing velit integer mauris ac dui mattis. Sris e
                    </p>
                    <p className={styles.read}>Read more</p>
                </div>
                <div className={styles.imgContainer}>
                    <img 
                        src="./images/nft.jpg" 
                        alt="nft image" 
                        className={styles.img} 
                    />
                    <div className={styles.splash}></div>
                </div>
            </div>

            <div className={`${style.flexCenter} flex-col text-white mt-[4rem]`}>
                <div className="flex items-center">
                    {statData.map((item, index) => (
                        <div className={`${index === 1 || 2 && 'ecoBorder'} ${styles.others}`}>
                            <h1 className={styles.statHead}>{item.name}</h1>
                            <p className='text-4xl mt-6 archivo'>{item.stat}</p>
                        </div>
                    ))}
                </div>

                <div className='mt-12'>
                    <Button 
                        text='Join now'
                        color={themes.primaryBtn}
                        size='large'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ecosystem