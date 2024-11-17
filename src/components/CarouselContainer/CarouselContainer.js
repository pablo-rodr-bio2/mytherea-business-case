import React from 'react'

import Carousel from '../Carousel/Carousel'
import './CarouselContainer.scss'
import { useMovies } from '../../hooks/useMovies'

const CarouselContainer = () => {
  const firstCarouselMovies = useMovies('batman');
  const secondCarouselMovies = useMovies('terminator');
  const thirdCarouselMovies = useMovies('dragon ball');

  const movies = [firstCarouselMovies, secondCarouselMovies, thirdCarouselMovies];

  return (
    <div className="carousels-container">
      {movies.map((movie, index) => (
        <Carousel 
          key={index} 
          movies={movie.movies} 
          loading={movie.loading} 
          error={movie.error} />
      ))}
    </div>
  )
}

export default CarouselContainer