const Testmonialcard = ({ imageUrl, name, testimony, post }) => {
    return (
        <div className='bg-cardDarkBg md:w-[25%] w-[95%] min-h-[250px] p-3 z-20
             border-primaryBtn border-[1px] shadow-md rounded-md mx-2 relative cursor-pointer'>
             <p className='max-w-[95%] text-sm text-gray-100'>
                {testimony}
             </p>

             <div className='flex justify-start items-start mt-12'>
                <img src={imageUrl} alt="first card image" className='rounded-full h-[80px] w-[80px] '/>
                <div className=" flex flex-col ml-4">
                    <h1 className='text-base text-slate-100'>{name}</h1>
                    <p className='text-sm leading-[0.5rem] font-light'>{post}</p>
                </div>
             </div>
        </div>
    )
}

export default Testmonialcard;