import React, { useState } from 'react'

import './Carousel.scss'
import CarouselButton from '../CarouselButton/CarouselButton';
import CarouselLink from '../CarouselLink/CarouselLink';

const Carousel = ({ movies, loading, error, category }) => {
  const [ index, setIndex ] = useState(0);

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

  if (loading || !movies) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
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