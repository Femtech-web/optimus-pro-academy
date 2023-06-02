import { Button } from '../elements';
import { themes } from '../../theme';
import { Rating } from '@mui/material';


const Trendingcard = ({ imageUrl, title, subtitle }) => {
    return (
        <div className='bg-cardDarkBg md:w-[25%] w-[95%] min-h-[300px] 
            p-2 shadow-md rounded-md mx-2 relative cursor-pointer z-20'>
            <img src={imageUrl} alt="first card image" className='rounded-md w-full'/>
            <h1 className='text-md my-2 font-bold mt-4'>{title}</h1>
            <p className='text-sm'>{subtitle}</p>

            <div className='mt-10'>
                <div className="flex justify-between mb-2">
                    <div className="flex">
                        <Rating defaultValue={5} sx={{color: `${themes.primaryBtn}`}}  size='small'/>
                        <span className='text-white text-sm ml-1'>5.0</span>
                    </div>
                    <p className='text-white text-sm'>42 Reviews</p>
                </div>
                <Button 
                    text='Enroll now'
                    size='full'
                    color={themes.primaryBtn}
                />
            </div>
        </div>
    )
}

export default Trendingcard