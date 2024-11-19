import React from 'react'
import { Link } from 'react-router-dom'

import './CarouselLink.scss'

const CarouselLink = ({ id, category, poster, title}) => {
  return (
    <div className='carousel-movie' key={id}>
      <Link to={`/movies/${category}/${id}`}>
        <img className='carousel-img' src={poster} alt={title} /> 
      </Link>
    </div>
  )
}

export default CarouselLink