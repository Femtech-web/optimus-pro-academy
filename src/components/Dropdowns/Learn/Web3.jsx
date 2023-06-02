import React from 'react';
import { Container } from '@mui/material';

const Web3 = () => {
  return (
    <Container>
        <div className='flex justify-center flex-col'>
            <h3 className='font-semibold mb-2'>Lorem ipsum dolor sit amet consectetur.</h3>
            <p className='font-thin text-sm max-w-[40%] text-left'>Lorem ipsum dolor sit amet consectetur. 
            Nisl natoque ipsum vitae urna odio arcu a.
            Nulla cursus ante amet nunc non fames.
            Lorem ipsum dolor sit amet consectetur. 
            Nisl natoque ipsum vitae urna odio arcu a. 
            Nulla cursus ante amet nunc non fames.
            </p>

            <div className='absolute bottom-0 right-0 flex  p-8
            justify-center items-center programGradient min-h-[150px]'>
            <p className='text-white text-lg font-light max-w-[180px] text-center'
            >
                10x faster development cycles with Optimus 
                pro web3 startup school
            </p>
        </div>
        </div>
    </Container>
  )
}

export default Web3