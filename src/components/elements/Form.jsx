import React, { useContext } from 'react';
import { SiteContext } from '../../context';
import { style } from '../../styles';
import { Input, Button } from '.';
import { themes } from '../../theme';
import { FcGoogle } from 'react-icons/fc';


const styles = {
    formCont : 'flex flex-col items-center md:w-[50%] w-full py-[3%] md:px-[9%] px-[5%] text-white',
    subHead: 'text-white/70 text-center mt-2',
    hr: 'w-[46%] h-[2px]',
    check: 'w-full flex items-start',
    links: 'text-primaryBtn underline cursor-pointer hover:text-white',
    links2: 'underline mt-4 text-sm cursor-pointer hover:text-primaryBtn',
    checkbox: 'mr-4 mt-2 cursor-pointer',
  };

  
const Form = () => {
    const { setIsSignUp, isSignUp } = useContext(SiteContext);
    const handleChange = () => {};
    const handleSubmit = () => {};

  return (
    <form className={`${styles.formCont}`} onSubmit={handleSubmit}>
        <h1 className={`${style.headings1}`}>Hi there!</h1>
        <p className={styles.subHead}>
        {isSignUp 
            ? <span>Get started with your free 
                <br /> account today.
            </span> 
            : 'Welcome back'
        }
        </p>

        {isSignUp && <Input 
        label='Full Name'
        name='firstname'
        type='text'
        placeholder='Firstname Lastname'
        handleChange={handleChange}
        />}
        <Input 
        label='Email'
        name='email'
        type='email'
        placeholder='name@email.com'
        handleChange={handleChange}
        />
        <Input 
        label='Password'
        name='Password'
        type='password'
        placeholder='*******'
        handleChange={handleChange}
        />

        <div className='w-full'>
        {isSignUp && <div className={`${styles.check} mt-8`}>
            <input type="checkbox" className={styles.checkbox} />
            <p>
            By signing up, I agree to Optimus Pro’s &nbsp;
            <span className={styles.links}>terms & conditions</span>
            </p>
        </div>}
        <div className={`${styles.check} mt-4`}>
            <input type="checkbox" className={styles.checkbox} />
            <p> I want to receive updates about Optimus Pro</p>
        </div>
        </div>

        <div className='w-full mt-[15%]'>
        <Button 
            text={isSignUp ? 'create my free account' : 'Log in'}
            color={themes.primaryBtn}
            submit={true}
        />
        <div className={`${style.flexCenter} w-full mt-4`}>
            <hr className={styles.hr} />  
            <span className='mx-3 w-[6%]'>OR</span> 
            <hr className={styles.hr} />
        </div>
        <Button 
            text={isSignUp ? 'Sign up with Google' : 'Log in with Google'}
            borderSize='1px'
            border={themes.primaryBtn}
            icon={<FcGoogle fontSize={25}/>}
            others='mt-3'
        />
        </div>

        {!isSignUp && <p className={styles.links2}>Forgot my password?</p>}
        <div className='mt-3 text-sm'>
        { isSignUp ? "Already have an Account?" : "Don't have an account"} 
        &nbsp;
        { isSignUp 
        ? (<span className={styles.links}
            onClick={() => setIsSignUp(false)}>
            Log in
            </span>) 
        : (<span className={styles.links}
            onClick={() => setIsSignUp(true)}>
            Sign up
        </span>)
        }
        </div>
    </form>
  )
}

export default Form