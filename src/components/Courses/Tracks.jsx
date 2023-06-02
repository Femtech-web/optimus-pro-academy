import React from 'react';
import { style } from '../../styles';
import { themes } from '../../theme';
import { Button } from '../elements';
import { TopButton } from '../Home/Ecosystem';
import { Trackcard } from '../cards';
import { Container, Grid } from '@mui/material';

const styles = {
  btnContainer: "md:flex md:flex-row flex-col block"
}
const Tracks = () => {
  const categories = [ 'All courses', 'finance', 'programming', 'Digital Art & Design', 'Management']
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={style.pagePad}>
      <h1 className={style.headings2}>All Tracks</h1>
      <div className={`${style.flexStart2} mt-6 ${style.flexMobile1}`}>
        <p className='font-semibold'>Categories</p>
        <div className={styles.btnContainer}>
          { categories.map((cat, index) => (
              index === 0 
              ? <TopButton text={cat} color={themes.primaryBtn} others='w-[90%] md:w-auto' /> 
              : <TopButton text={cat} color='#49494b' others='w-[90%] md:w-auto'/>
          ))}
        </div>
      </div>

      <Container sx={{marginTop: '4rem', }}>
        <Grid container spacing={2}>
            {cards.map((index) => (
              <Grid item xs={12} sm={6} md={3} key={index} className='md:-translate-x-0 -translate-x-5'>
                <Trackcard 
                  title='Finance'
                  subtitle='Learn about Web3 financial applications and technologies.'
                  imageUrl='./images/cardUp1.jpg'
                  imageUrl2='./images/testimonial3.png'
                  name='John Bull'
                  course={true}
                />
              </Grid>
            ))}
        </Grid>
      </Container>

      <div className={`${style.flexCenter} w-full mt-12`}>
        <Button 
          text='Show all'
          border={themes.primaryBtn}
          borderSize='1px'
          size='large'
        />
      </div>
    </div> 
  )
}

export default Tracks