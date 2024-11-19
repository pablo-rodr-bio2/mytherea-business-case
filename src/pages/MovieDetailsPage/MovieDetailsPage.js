import React from 'react'
import { useParams } from 'react-router-dom'

import { useMovieDetails } from '../../hooks/useMovieDetails'
import './MovieDetailsPage.scss'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const { loading, error, movieDetails } = useMovieDetails(movieId)

  const handleWishlist = () => {
    const wishlist = JSON.parse(sessionStorage.getItem('wishlist')) || []

    const isInWishlist = wishlist.some(movie => movie.imdbID === movieDetails.imdbID);

    if(!isInWishlist) {
      wishlist.push(movieDetails)

      sessionStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
  }

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
          <button onClick={handleWishlist} className='movie-details-info_btn'>Add to wishlist</button>  
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