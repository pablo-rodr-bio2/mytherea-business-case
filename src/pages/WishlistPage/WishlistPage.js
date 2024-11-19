import React from 'react'

import './WishlistPage.scss'
import WishlistContainer from '../../components/WishlistContainer/WishlistContainer'

const WishlistPage = () => {
  const wishlist = JSON.parse(sessionStorage.getItem('wishlist')) || []

  return (
    <div className='wishlist-container'>
      <h1>Your Wishlist Movies</h1>
      <WishlistContainer wishlist={wishlist} />
    </div>
  )
}

export default WishlistPage