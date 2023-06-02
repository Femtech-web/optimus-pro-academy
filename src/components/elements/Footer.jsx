import React from 'react';
import { style } from '../../styles';
import Logo  from './Logo';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { footerLinksData, SocialIcons } from '../../data/dummy';


const styles = {
    container: 'px-4 py-[1%] text-white flex flex-col',
    logoContainer: 'relative md:w-[30%] w-[100%] flex-col',
    logoText: 'text-skyBlue tracking-widest text-lg translate-x-4',
    splash: 'absolute -top-[10%] left-8 w-[20rem] h-[20rem] splash',
    column: 'md:ml-12 ml-0 md:block flex flex-col items-center justify-center',
    columnText: 'text-primaryBtn mb-4 md:mt-0 mt-4',
    list: 'text-sm my-2 md:text-left text-center cursor-pointer hover:underline',
    span: 'cursor-pointer hover:scale-75 transition-all',
    input: 'items-center md:my-0 my-8 ',
    inputCont: 'md:items-center min-h-[42px] md:w-auto w-full',
    input2: 'bg-[#323335] w-full rounded-md p-3 md:ml-4 ml-0 outline-none md:my-0 my-2',
    btn: 'bg-primaryBtn p-3 rounded-md flex w-full justify-evenly hover:shadow-btnShadow transition-all md:my-0 my-2'
};

const Footer = () => {
  return (
    <div className={styles.container}>
        <hr />
        <div className={`${style.flexMobile2} my-4`}>
            <div className={`${style.flexCenter} ${styles.logoContainer}`}>
                <Logo width='60%' />
                <p className={styles.logoText}>hello@optimuspro.com</p>
                <div className={styles.splash}></div>
            </div>
            {footerLinksData.map((item) => (
                <div className={styles.column}>
                    <h1 className={styles.columnText}>{item.Header}</h1>
                    <ul>
                        {item.links.map((list) => (
                            <li className={styles.list}>{list}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className={style.flexMobile2}>
            <div className='md:w-[30%] w-full'>
                <p className='text-lg'>Join the community</p>
                <div className='flex mt-4 mb-8'>
                    {SocialIcons.map((icon, index) => (
                        <span 
                        className={`${index === 0 ? 'mr-3': 'mx-3'} ${styles.span}`}>{icon}</span>
                    ))}
                </div>
            </div>
            <div className={`${styles.input} ${style.flexMobile1} ${style.flexBtw}`}>
                <p className='font-bold'>Subscribe To Our Newsletter</p>
                <div className={`${style.flexMobile2} ${styles.inputCont}`}>
                    <input type="text" 
                     placeholder='Name' 
                     className={`${styles.input2} md:ml-4 ml-0`} />
                    <input type="text" 
                     placeholder='Email' 
                     className={`${styles.input2} md:mx-3 mx-0`} />
                    <button className={styles.btn}>
                      Subscribe Now
                      <AiOutlineDoubleRight fontSize={25} className='ml-2' />
                    </button>
                </div>
            </div>
        </div>
        <hr />
        <div className="flex justify-between my-4">
            <p className='text-sm'>©️2023 Optimus Pro Inc. All rights reserved.</p>
            <div className='text-sm md:flex hidden'>
                <p className='mr-6 '>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer