import React from 'react'
import { Link } from 'react-router-dom'

import './WishlistContainer.scss'

const WishlistContainer = ({ wishlist }) => {
  if(!wishlist || wishlist.length === 0) {
    return <div>No movies in your wishlist.</div>
  }

  return (
    <ul className='wishlist-list'>
      {wishlist.map((movie, index) => (
        <li key={movie.imdbID}>
          <Link 
            to={`/movies/${movie.imdbID}`} 
            className='wishlist-link'
          >
            {index}. {movie.Title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default WishlistContainer