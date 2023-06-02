import React from 'react';
import { style } from '../../styles';
import { Button } from '../elements';
import { themes } from '../../theme';
import { BiRightArrowCircle } from 'react-icons/bi';


const styles = {
    imgContainer: 'rounded-2xl mt-8 md:mx-5 mx-1',
    imgSub: 'rounded-2xl w-full min-h-[60vh]',
    imgBoth: 'md:w-[50%] w-full bg-coursesBg rounded-tl-2xl  flex justify-center relative',
    img1: 'w-[100%] h-[70vh] rounded-tl-2xl ',
    img2: 'absolute top-0 left-0 w-[60%]',
    leftCard: 'md:w-[50%] w-[100%] bg-cardDarkBg rounded-tr-2xl p-8',
    text: 'md:max-w-[85%] max-w-full text-left mt-8',
    avatar: 'w-[60px] h-[60px] rounded-full',
    btn: 'rounded-bl-2xl rounded-br-2xl border-none rounded-none ',
};

const Featured = ({ title, text, img1, img2, icon, name, learn }) => {
  return (
    <div className={`${style.flexY} ${styles.imgContainer}`}>

        <div className={`${style.flexMobile2} ${styles.imgSub}`}>

            <div className={styles.imgBoth}>
                <img src={img1} alt={title} className={styles.img1} />
                <img src={img2} className={styles.img2} alt={title} />
            </div>

            <div className={styles.leftCard}>
                <h1 className={style.headings3}>
                    Lorem ipsum
                </h1>
                <p className={styles.text}>
                    {text}
                </p>
                <div>
                    <div className={`${style.flexStart2} mt-6`}>
                        <img 
                            src={icon}
                            alt="instructor's image" 
                            className={styles.avatar}
                        />
                        <p className='ml-8'>with 
                            <span className='font-bold'>{name}</span>
                        </p>
                    </div>
                    <div className='text-left mt-8'>
                        <p>what will you be learning:</p>
                        <p className='font-semibold'>{learn}</p>
                    </div>
                </div>
            </div>

        </div>

        <Button 
            color={themes.primaryBtn}
            size='full'
            text='Start now'
            others={styles.btn}
            noAnime={true}
            icon={<BiRightArrowCircle fontSize={20} />}
        />
    </div>
  )
}

export default Featured