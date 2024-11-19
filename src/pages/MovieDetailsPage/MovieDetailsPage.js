import React from 'react'
import { useParams } from 'react-router-dom'

import { useMovieDetails } from '../../hooks/useMovieDetails'
import './MovieDetailsPage.scss'
import MovieDetailsContainer from './components/MovieDetailsContainer/MovieDetailsContainer'

const MovieDetailsPage = () => {
  const { movieId, category } = useParams()
  const { loading, error, movieDetails } = useMovieDetails(movieId)

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }

  if (!movieDetails) {
    return <div>No details available for this movie.</div>;
  }

  return (
    <div className='movie-details-page'>
      <MovieDetailsContainer 
        movieDetails={movieDetails} 
        category={category} 
      />
    </div>
  )
}

export default MovieDetailsPage