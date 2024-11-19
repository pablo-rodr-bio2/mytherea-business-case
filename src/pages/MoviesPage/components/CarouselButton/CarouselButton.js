import React from 'react'

import './CarouselButton.scss'

const CarouselButton = ({ text, handleClick }) => {
  return (
    <button 
      className='carousel-button' 
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default CarouselButton