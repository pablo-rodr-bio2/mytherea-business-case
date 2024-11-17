import React from 'react'
import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../../hooks/useMovieDetails'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
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
    <div>
      <div>
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
      </div>
      <div>
        <div>{movieDetails.Title}</div>
        <div>{movieDetails.plot}</div>
        <button>Add to wishlist</button>
      </div>
      <div>
        <div>Year: {movieDetails.Year}</div>
        <div>Director: {movieDetails.Director}</div>
        <div>Actors: {movieDetails.Actors}</div>
      </div>
    </div>
  )
}

export default MovieDetailsPage