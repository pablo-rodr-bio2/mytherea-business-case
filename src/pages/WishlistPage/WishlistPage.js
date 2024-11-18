import React from 'react'
import { Link } from 'react-router-dom'

const WishlistPage = () => {
  const wishlist = JSON.parse(sessionStorage.getItem('wishlist')) || []

  if(wishlist.length === 0) {
    return <div>No movies in your wishlist.</div>
  }

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>
              {movie.Title}
            </Link>
          </li>
        ))}
        </ul>
      </div>
  )
}

export default WishlistPage