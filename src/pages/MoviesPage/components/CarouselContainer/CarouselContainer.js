import React from 'react'

import Carousel from '../Carousel/Carousel'
import './CarouselContainer.scss'
import { CATEGORIES } from '../../../../constants/categories';

const CarouselContainer = () => {
  return (
    <div className="carousels-container">
      {CATEGORIES.map(category =>(
        <Carousel 
          key={category} 
          category={category}
        />
      ))}
    </div>
  )
}

export default CarouselContainer