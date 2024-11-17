import React from 'react'

import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <h2>
        <a href="/movies">Movie App</a>
      </h2>

      <h2>
        <a href="/wishlist">Wishlist</a>
      </h2>
    </header>
  )
}

export default Header