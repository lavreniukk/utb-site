import React from 'react'

function ColorCard({color}) {
  return (
    <div className='d-flex flex-column align-items-center mb-2'>
      <div className='color-card__image-wrapper overflow-hidden'>
        <img className='color-card__image' src={color.imageSrc} alt={color.colorTitle} width={100} height={100} loading='lazy'/>
      </div>
        <span className='color-card__title'>{color.colorTitle}</span>
    </div>
  )
}

export default ColorCard