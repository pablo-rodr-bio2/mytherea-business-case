import React, { useState } from 'react'

import './Carousel.scss'
import { Link } from 'react-router-dom'

const Carousel = ({ movies, loading, error }) => {
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
      <button className='carousel-button' onClick={handlePrevious}>Previous</button>

      <div className="movies">
        {movies && carrouselMovies.map(movie => (
          <div className='movie' key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>
              <img className='carousel-img' src={movie.Poster} alt={movie.Title} /> 
            </Link>
          </div>
        ))}
      </div>

      <button className='carousel-button' onClick={handleNext}>Next</button>
    </section>
  )
}

export default Carousel