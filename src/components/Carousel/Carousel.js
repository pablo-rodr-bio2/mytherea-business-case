import React from 'react'

import './Carousel.scss'
import { Link } from 'react-router-dom'

//TODO: fix movil view, images are too big
const Carousel = ({ movies, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }
  
  return (
    <section className="carousel">
      <button className='carousel-button'>Previous</button>

      <div className="movies">
        {movies && movies.slice(0,3).map(movie => (
          <div className='movie'>
            <Link to={`/movies/${movie.imdbID}`}>
              <img className='carousel-img' src={movie.Poster} alt={movie.Title} /> 
            </Link>
          </div>
        ))}
      </div>

      <button className='carousel-button'>Next</button>
    </section>
  )
}

export default Carousel