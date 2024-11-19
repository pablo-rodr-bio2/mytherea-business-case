import React, { useState } from 'react'

import './WishlistPage.scss'
import WishlistContainer from './components/WishlistContainer/WishlistContainer'

const WishlistPage = () => {
  const [ wishlist, setWishlist ] = useState(JSON.parse(sessionStorage.getItem('wishlist')) || [])
  
  const resetWishlist = () => {
    sessionStorage.clear()
    setWishlist([])
  }

  return (
    <div className='wishlist-page'>
      <h1>Your Wishlist Movies</h1>

      <WishlistContainer wishlist={wishlist} />

      <button onClick={resetWishlist} className='wishlist-reset'>Reset wishlist</button>
    </div>
  )
}

export default WishlistPage