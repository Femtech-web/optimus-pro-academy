import React, { createContext, useState, useEffect } from "react";


export const SiteContext = createContext();


export const Contextprovider = ({children}) => {
    const [mobile, setMobile] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [ currentDropDown, setCurrentDropDown ] = useState('');
    const [ hideLearn, setHideLearn ] = useState(false);
    const [ mobileSubmenu, setMobileSubmenu ] = useState(false);
    const [ activeLink, setActiveLink ] = useState('Educational Resources');
    const [ currentBar, setCurrentBar ] = useState('');
    const [ isSignUp, setIsSignUp ] = useState(true);
    const [ learnStates, setLearnStates ] = useState({
        educational: true,
        courses: false,
        program: false,
        web3: false,
    }); 
    const [ dropDown, setDropDown ] = useState({
        learn: false,
        community: false
    });

    
    // UseEffect Functions

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)")
    
        setMobile(mediaQuery.matches);
        if(!mediaQuery){
          setDropDown({
              learn: false,
              community: false
          })
        }
        setHideLearn(false);

        const handleMediaQueryChange = (event) => {
          setMobile(event.matches);
          setDropDown({
              learn: false,
              community: false
          })
          setHideLearn(false);
        }
    
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    
      }, [])
      
      useEffect(() => {
        if(mobile){
            setHideLearn(true);
            
            setDropDown({
                learn: false,
                community: false
            })
        }
        
      }, [mobile])


    //   HANDLING EVENT FUNCTIONS
    
    // mouse over and in

    const handleMouseHover = (name) => {
          const newName = name.toLowerCase();
          setCurrentDropDown(name)
  
          setDropDown({
          learn: false,
          community: false,
          [newName]: true
        })
    };

    const handleMouseOut = (name) => {
          const newName = name.toLowerCase();
  
          setDropDown({
          ...dropDown,
          [newName]: false
      })
    }

    // handler for learn dropdown menus

    const handleChange = (name) => {
        const firstName = name.split(' ')[0].toLowerCase();

        setLearnStates({
            educational: false,
            courses: false,
            program: false,
            web3: false,
            [firstName]: true
        });
    }

    const handleClick = (name, mobile) => {
        if(mobile){
            setMobileSubmenu(true);
            handleChange(name);
            setCurrentBar(name);
        }else{
            handleChange(name);
            setActiveLink(name);
        }
    };

    // learn dropdown open and close on mobile

    const handleLearn = (name) => {
        if(mobile){
            setHideLearn(true);
            handleChange(name)
        }
        
    }

    // handlers for cleanups 

    const handleMore = (name) => {
        if(mobile){
            setHideLearn(false);
            handleMouseHover(name)
        } 
    }
  
    const handleButton = () => {
        setDropDown({
          learn: false,
          community: false
      });
  
      setMobileNav(false);

      window.scrollTo(0, 0)
    }


    return (
        <SiteContext.Provider
            value={{mobile, setMobile, 
            mobileNav, setMobileNav, 
            currentDropDown, setCurrentDropDown, 
            dropDown, setDropDown,
            handleMouseHover, handleMouseOut,
            hideLearn, setHideLearn,
            mobileSubmenu, setMobileSubmenu,
            handleMore, activeLink,
            setActiveLink, currentBar,
            setCurrentBar, learnStates,
            setLearnStates, handleChange,
            handleClick, handleLearn,
            setIsSignUp, isSignUp,
            handleButton}}
        >
            {children}
        </SiteContext.Provider>
    )
}
