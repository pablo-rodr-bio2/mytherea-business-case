import React from 'react'

import Carousel from '../Carousel/Carousel'
import './CarouselContainer.scss'

const CarouselContainer = () => {
  return (
    <div className="carousels-container">
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  )
}

export default CarouselContainer