import React from "react"
import { render, screen } from "@testing-library/react"

import WishlistPage from "./WishlistPage"
import { BrowserRouter } from "react-router-dom"

const renderComponent = () => render(
  <BrowserRouter>
    <WishlistPage />
  </BrowserRouter>
)

describe('WishlistPage', () => {
  beforeEach(() => {
    sessionStorage.removeItem('wishlist')
  })

  describe('when there are movies saved in session', () => {
    it("renders the movies list", () => {
      sessionStorage.setItem('wishlist', JSON.stringify([{Title: 'Movie 1', imdbID: '1'}]))

      renderComponent()
  
      expect(screen.getByText('Your Wishlist Movies')).toBeInTheDocument()
      expect(screen.getByText(/Movie 1/i)).toBeInTheDocument();
    })
  })

  describe('when there are no movies saved in session', () => {
    it("renders the empty message", () => {
      renderComponent()
  
      expect(screen.getByText('Your Wishlist Movies')).toBeInTheDocument()
      expect(screen.getByText('No movies in your wishlist.')).toBeInTheDocument()
    })
  })
})