import React from 'react'
import { useParams } from 'react-router-dom'

import { useMovieDetails } from '../../hooks/useMovieDetails'
import './MovieDetailsPage.scss'

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

  console.log(movieDetails)

  return (
    <div className='movie-details-container'>
      <div className='movie-details-info'>
        <div className='movie-details-info_img'>
          <img src={movieDetails.Poster} alt={movieDetails.Title} className='something'/>
        </div>

        <div className='movie-details-info_data'>
          <p>Title: {movieDetails.Title}</p>
          <p>Year: {movieDetails.Year}</p>
          <p>Genre: {movieDetails.Genre}</p>
          <p>Director: {movieDetails.Director}</p>
          <button>Add to wishlist</button>  
        </div>
      </div>

      <div className='movie-details-add'>
        <p>{movieDetails.Plot}</p>
        <p>Actors: {movieDetails.Actors}</p>
        <p>Rated for: {movieDetails.Rated}</p>
        <p>Runtime: {movieDetails.Runtime}</p>
      </div>

    </div>
  )
}

export default MovieDetailsPage