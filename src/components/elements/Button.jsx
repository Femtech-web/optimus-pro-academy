import React, { useContext } from 'react'
import { style } from '../../styles'
import { SiteContext } from '../../context'

const btnStyle = (color, size, border, borderSize, textColor) => {
  return ({
    backgroundColor: `${color}`,
    minWidth: `${size === 'small' ? '80px' : size === 'normal' ? '160px' : size === 'large' ? '250px' : '100%' }`,
    border: `${borderSize} solid ${border}`,
    color: `${textColor}`
  })
};

const styles = { 
  main: 'px-6 py-4 text-white rounded-md',
  noAnime: 'hover:shadow-btnShadow transition-all',
};

const Button = ({ text, color, size, border, borderSize, others, textColor, noAnime, icon, submit }) => {
  const { handleButton } = useContext(SiteContext);

  return (
    <button type={submit ? 'submit' : 'button' }
      className={`${others} ${styles.main} ${icon && style.flexCenter}  
      ${!noAnime && styles.noAnime}`}
      onClick={handleButton}
      style={btnStyle(color, size, border, borderSize, textColor )}
    >
      {icon && icon}
      <p className={`${icon && 'ml-2'} text-sm `}>{text}</p>
    </button>
  )
}

export default Button