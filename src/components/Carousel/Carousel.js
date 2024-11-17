import React from 'react'

import './Carousel.scss'
import { Link } from 'react-router-dom'

const Carousel = ({ movies, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }
  
  return (
    <section className="carousel">
      <div className='carousel-button'>Previous</div>

      <div className="movies">
        {movies && movies.slice(0,3).map(movie => (
          <div className='movie'>
            <Link to={`/movies/${movie.imdbID}`}>
              {/* <img className='carousel-img' src={movie.Poster} alt={movie.Title} />  */}
              <p>{movie.Title}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className='carousel-button'>Next</div>
    </section>
  )
}

export default Carousel