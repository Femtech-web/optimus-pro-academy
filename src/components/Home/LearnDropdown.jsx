import React, { useContext } from 'react';
import { SiteContext } from '../../context';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { learnLinks } from '../../data/dummy';
import { EduResources, Courses, Programs, Web3, EduNav } from '../Dropdowns/Learn';


const styles ={
    active: (mobile) => `${mobile ? 'hover:bg-hoverBg hover:rounded-md ' : 'bg-primaryBtn rounded-md'} `,
    hover: 'hover:bg-hoverBg hover:rounded-md',
    others: (mobile) => `text-white flex items-center px-8 cursor-pointer ${mobile ? 'py-6 w-full justify-between' : 'py-2 mx-2 justify-center '}`
};

const LearnDropdown = () => {
    const { mobile, learnStates,
        hideLearn, handleClick, 
        handleLearn, mobileSubmenu, 
        currentBar, activeLink }
        = useContext(SiteContext);
    

    

  return (
    <div className={`${mobile ? 'top-0 left-0 border-none w-full min-h-[90vh] ' 
    : 'top-[80%] left-[10%] max-w-[800px] border-[1px] border-primaryBtn'} 
        px-8 py-2  absolute z-30 ${hideLearn ? 'hidden' : 'flex' }
        flex-col flex-wrap  rounded-xl font-semibold bg-mainBg`} >
            <ul className={`${mobile ? 'flex-col items-start justify-between mb-0  my-12' : 'flex-row mb-12 justify-start items-center'} flex  `}>
            {mobile && <BsArrowLeft  
                fontSize={20} 
                className='text-white cursor-pointer mb-10'
                onClick={() => handleLearn(currentBar)}
            />}
            {learnLinks.map((link) => (
                <li className={`${activeLink === link ? styles.active(mobile) : null}
                    ${activeLink === link  ? 'hover:null' : styles.hover} 
                    ${styles.others(mobile)}`}
                    onClick={() => handleClick(link, mobile)}
                >
                    {link}
                    {mobile && <BsArrowRight  fontSize={20} className='text-white cursor-pointer mb-10 translate-y-3'/>}
                </li>
            ))}
        </ul> 
        {learnStates.educational && !mobile ? <EduResources /> : learnStates.educational && mobileSubmenu ? <EduNav /> : null   }
        {learnStates.courses && <Courses  />}
        {learnStates.programs && <Programs />}
        {learnStates.web3 && <Web3 />}
    </div>
  )
}

export default LearnDropdown