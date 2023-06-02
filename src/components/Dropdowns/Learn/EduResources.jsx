import React, { useContext } from 'react'; 
import { SiteContext } from '../../../context';
import { Grid, Container } from '@mui/material';
import { GiClick } from 'react-icons/gi';
import { EduResourcesData } from '../../../data/dummy';

const EduResources = () => {
  const { handleMouseOut, currentBar, mobile } = useContext(SiteContext);
  
  return (
    <Container>
      <Grid container sx={{ maxWidth: !mobile ? '60%' : '80%', }} spacing={6} >
        {EduResourcesData.map((item) => (
          <Grid item xl={6}>
              <div className='flex items-center justify-between w-[80vw] sm:w-auto'>
              <div className='flex items-center justify-center'>
                  {item.icon}
                  <div className='flex flex-col ml-4'>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-white font-thin text-[0.7rem] cursor-pointer hover:underline"
                        onClick={() => handleMouseOut(currentBar)}
                      >{item.subtitle}</p>
                  </div>
              </div>
                 <div className='sm:hidden block'>
                    <GiClick 
                      fontSize={20} 
                      className='text-white cursor-pointer' 
                    />
                 </div>
                  
              </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default EduResources