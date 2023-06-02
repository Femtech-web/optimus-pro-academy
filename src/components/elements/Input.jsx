import React from 'react';


const styles = {
    label: 'my-1 block font-semibold tracking-widest text-sm',
    input:'placeholder:text-white/50 text-sm outline-none px-4 py-4 w-full bg-[#666869] rounded-lg focus:border-primaryBtn focus:border-2',
};


const Input = ({ name, type, placeholder, handleChange, label }) => {
  return (
    <div className='mt-4 w-full'>
        <label className={styles.label}>{label}</label>
        <input 
            type={type} 
            name={name} 
            placeholder={placeholder}
            onChange={handleChange}
            className={styles.input}
         />
    </div>
  )
}

export default Input