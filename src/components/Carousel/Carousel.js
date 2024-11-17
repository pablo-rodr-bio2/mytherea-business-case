import React from 'react'

import './Carousel.scss'

const Carousel = ({ movies, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }
  
  return (
    <section className="carousel">
      {movies && movies.slice(0,3).map(movie => (
        <div key={movie.imdbID} className="movie">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </section>
  )
}

export default Carousel