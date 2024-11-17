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
      <div>Previous</div>
      {movies && movies.slice(0,3).map(movie => (
        <img src={movie.Poster} alt={movie.Title} /> 
      ))}
      <div>Next</div>
    </section>
  )
}

export default Carousel