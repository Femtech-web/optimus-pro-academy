import { style } from "../../styles"

const styles = {
    container: 'bg-cardDarkBg  w-[95%] min-h-[250px] md:p-2 p-4 shadow-md rounded-md md:mx-2 relative cursor-pointer mx-4',
    btn: 'mt-12 rounded-md w-full py-3 border-[1px] border-primaryBtn relative btnMentor z-10',
    title: 'text-md my-2 font-bold mt-4',
    btnText: 'text-white text-center text-sm',
}

const Trackcard = ({ imageUrl, title, subtitle, course, name, imageUrl2 }) => {
    return (
        <div className={`${styles.container} ${course ? 'w-full' : 'md:w-[25%] sm:w-[60%]'} `}>

            <img 
                src={imageUrl} 
                alt="first card image" 
                className='rounded-md'
            />
            <h1 className={styles.title}>{title}</h1>
            <p className='text-sm'>{subtitle}</p>

            { course && <div className={`${style.flexBtw2} mt-6`}>
                <div className={style.flexEvenly}>
                    <img 
                        src={imageUrl2} 
                        alt={name} 
                        className="w-[40px] h-[40px] rounded-full mr-2"
                    />

                    <div className="text-sm">
                        <p className="font-semibold">{name}</p>
                        <p>your instructor</p>
                    </div>
                </div>
                <p className="font-semibold">Basic</p>
            </div> }

            <button className={styles.btn} type='button'>
                <p className={styles.btnText}>{course ? 'Get Started' : 'Become a mentor'}</p>
            </button>
        </div>
    )
}

export default Trackcard