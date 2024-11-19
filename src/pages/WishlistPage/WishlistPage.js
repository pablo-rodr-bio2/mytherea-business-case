import React from 'react'
import { Link } from 'react-router-dom'

import './WishlistPage.scss'

const WishlistPage = () => {
  const wishlist = JSON.parse(sessionStorage.getItem('wishlist')) || []

  if(wishlist.length === 0) {
    return <div>No movies in your wishlist.</div>
  }

  return (
    <div className='wishlist-container'>
      <h1>Wishlist</h1>
      <ul className='wishlist-list'>
        {wishlist.map(movie => (
          <li key={movie.imdbID}>
            <Link 
              to={`/movies/${movie.imdbID}`} 
              className='wishlist-link'
            >
              {movie.Title}
            </Link>
          </li>
        ))}
        </ul>
      </div>
  )
}

export default WishlistPage