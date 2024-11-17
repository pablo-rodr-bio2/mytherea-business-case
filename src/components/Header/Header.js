import React from 'react'

import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <h2>
        <Link to="/movies">Movies</Link>
      </h2>

      <h2>
        <Link to="/wishlist">Wishlist</Link>
      </h2>
    </header>
  )
}

export default Header