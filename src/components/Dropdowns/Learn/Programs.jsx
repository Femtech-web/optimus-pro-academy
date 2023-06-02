import React from 'react';
import { programsData } from '../../../data/dummy';
import { Grid, Container } from '@mui/material';
import { BsArrowRightShort } from 'react-icons/bs';

const Programs = ({ handleMouseOut, current }) => {
  return (
    <Container>
        <div className='flex w-full'>
            <Grid container spacing={4}>
                {programsData.map((item) => (
                    <Grid item xl={6}>
                        {item.map((link) => (
                            <div className='flex items-center py-6'>
                                {link.icon}
                                <p className='ml-2 cursor-pointer font-medium hover:underline'
                                    onClick={() => handleMouseOut(current)}
                                >{link.name}</p>
                            </div>
                        ))}
                    </Grid>
                ))}
            </Grid>
            <div className='absolute bottom-0 right-0 flex flex-col p-12
                justify-center items-center programGradient min-h-[200px]'>
                <p className='text-white text-lg  font-light'>Join the best <br /> career in web3</p>
                <div className='flex justify-center items-center mt-4'>
                    <p className="text-skyBlue text-sm ">see careers</p> <BsArrowRightShort fontSize={15}/>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Programs