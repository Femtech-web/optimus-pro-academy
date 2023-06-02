
const Updatecard = ({ imageUrl, title, content }) => {
    return (
        <div className='bg-cardDarkBg2 md:w-[25%] w-[95%] min-h-[250px] border-[1px] 
         shadow-md rounded-lg mx-2 relative cursor-pointer border-primaryBtn'>
            <img src={imageUrl} alt="first card image" className='rounded-tl-lg rounded-tr-lg'/>
            <div className='p-2'>
                <h1 className='text-md my-4 font-semibold'>{title}</h1>
                <p className='text-sm'>{content}</p>
            </div>
        </div>
    )
}

export default Updatecard;