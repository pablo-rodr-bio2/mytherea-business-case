import React from "react";
import { render, screen } from "@testing-library/react";

import { useMovies } from "../../../../hooks/useMovies";
import Carousel from "./Carousel";
import { BrowserRouter } from "react-router-dom";

jest.mock('../../../../hooks/useMovies');

const renderComponent = () => render(
  <BrowserRouter>
    <Carousel category='action' />
  </BrowserRouter>
); 

describe('Carousel', () => {
  describe('when loading', () => {
    it('renders a loading message', () => {
      useMovies.mockReturnValue({ loading: true, error: null, movies: null });

      renderComponent();

      expect(screen.getByText('Loading...')).toBeInTheDocument();
    })
  })

  describe('when error', () => {
    it('renders an error message', () => {
      useMovies.mockReturnValue({ 
        loading: false, 
        error: { message: 'An error occurred' }, 
        movies: null 
      });

      renderComponent();

      expect(screen.getByText('Error: An error occurred')).toBeInTheDocument();
    })
  })

  describe('when no movies', () => {
    it('renders a message indicating there are no movies', () => {
      useMovies.mockReturnValue({ loading: false, error: null, movies: [] });

      renderComponent();

      expect(screen.getByText('No movies in this category')).toBeInTheDocument();
    })
  })

  describe('when there are movies', () => {
    it('renders the movies', () => {
      useMovies.mockReturnValue({ 
        loading: false, 
        error: null, 
        movies: [
          { imdbID: '1', Poster: 'poster1.jpg', Title: 'Movie 1' },
          { imdbID: '2', Poster: 'poster2.jpg', Title: 'Movie 2' },
          { imdbID: '3', Poster: 'poster3.jpg', Title: 'Movie 3' }
        ]
      });

      renderComponent();

      expect(screen.getByRole('img', { name: /movie 1/i })).toHaveAttribute('src', 'poster1.jpg');
      expect(screen.getByRole('img', { name: /movie 2/i })).toHaveAttribute('src', 'poster2.jpg');
      expect(screen.getByRole('img', { name: /movie 3/i })).toHaveAttribute('src', 'poster3.jpg')
    })
  })
})