import React from 'react'

import Carousel from '../Carousel/Carousel'
import './CarouselContainer.scss'
import { useMovies } from '../../../../hooks/useMovies';
import { CATEGORIES } from '../../../../constants/categories';

const CarouselContainer = () => {
  const firstCarouselMovies = useMovies(CATEGORIES[0]);
  const secondCarouselMovies = useMovies(CATEGORIES[1]);
  const thirdCarouselMovies = useMovies(CATEGORIES[2]);

  const movies = [firstCarouselMovies, secondCarouselMovies, thirdCarouselMovies];

  return (
    <div className="carousels-container">
      {movies.map((movie, index) => (
        <Carousel 
          key={CATEGORIES[index]} 
          category={CATEGORIES[index]}
          movies={movie.movies} 
          loading={movie.loading} 
          error={movie.error} />
      ))}
    </div>
  )
}

export default CarouselContainer