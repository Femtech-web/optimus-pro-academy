const Startcard = ({ figure, title, subtitle, translate}) => {
    return (
        <div className={`flex flex-col p-4 cardBg border-[1px] border-primaryBtn cursor-pointer
          min-h-[250px] md:w-[33.3%] w-full rounded-md m-2 ${translate && 'md:-translate-y-8'} `}>
          <div className='flex flex-col'>
            <h1 className='font-[helvatica] w-[55px] uppercase text-3xl font-black'>{figure}</h1>
            <p className='archivo leading-[0.5rem] mt-0 font-black text-base mb-5 tracking-wider'>{title}</p>
          </div>
            <p className='text-sm leading-6'>{subtitle}</p>
        </div>
    )
}

export default Startcard