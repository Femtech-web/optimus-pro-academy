import React from 'react';
import { Grid } from '@mui/material';
import { coursesDropData } from '../../../data/dummy';

const styles = {
    heading: 'font-semibold text-base cursor-default', 
    others: 'my-3 text-[0.7rem] text-center'
}

const Courses = ({ handleMouseOut, current }) => {
  return (
    <div className=' text-white flex flex-wrap px-8'>
        <Grid container sx={{ maxWidth: '80%', }} spacing={4}>
            {coursesDropData.map((item) => (
                <Grid item xs={6} sm={3}>
                    <div className='flex flex-col justify-center'>
                        {item.map((link, index) => (
                            <p className={`${index === 0 ? styles.heading 
                            : 'font-thin hover:underline cursor-pointer'}  ${styles.others}`}
                            onClick={() => handleMouseOut(current)}
                            >{link}</p>
                        ))}
                    </div>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default Courses