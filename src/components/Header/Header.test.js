import React from 'react'
import { render, screen } from "@testing-library/react"

import Header from "./Header"
import { BrowserRouter } from 'react-router-dom'

describe('Header', () => {
  it('renders both links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(screen.getByText('Movies')).toBeInTheDocument()
    expect(screen.getByText('Wishlist')).toBeInTheDocument()
  })
})