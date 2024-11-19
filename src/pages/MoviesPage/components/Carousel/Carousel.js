import React, { useState } from 'react'

import './Carousel.scss'
import CarouselButton from '../CarouselButton/CarouselButton';
import CarouselLink from '../CarouselLink/CarouselLink';
import { useMovies } from '../../../../hooks/useMovies';

const Carousel = ({ category }) => {
  const [ index, setIndex ] = useState(0);
  const { loading, error, movies } = useMovies(category);

  const handleNext = () => {
    const newIndex = index + 3;
    if(newIndex < movies.length) {
      setIndex(newIndex);
    }
  }

  const handlePrevious = () => {
    const newIndex = index - 3;
    if(newIndex >= 0) {
      setIndex(newIndex);
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }

  if(!movies || movies.length === 0) {
    return <div>No movies in this category</div>
  }

  const carrouselMovies = movies.slice(index, index + 3);
  
  return (
    <section className="carousel">
      <CarouselButton text='Previous' handleClick={handlePrevious} />

      <div className="carousel-movies">
        {movies && carrouselMovies.map(movie => (
          <CarouselLink
            key={movie.imdbID} 
            id={movie.imdbID} 
            category={category} 
            poster={movie.Poster} 
            title={movie.Title} 
          />
        ))}
      </div>

      <CarouselButton text='Next' handleClick={handleNext} />
    </section>
  )
}

export default Carousel