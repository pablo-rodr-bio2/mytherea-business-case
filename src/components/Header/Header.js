import React from 'react'

import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <h2>
        <Link to="/movies" className='header-link'>Movies</Link>
      </h2>

      <h2>
        <Link to="/wishlist" className='header-link'>Wishlist</Link>
      </h2>

      <h2><button onClick={() => sessionStorage.clear()}>Reset</button></h2>
    </header>
  )
}

export default Header