import React from 'react';
import { useMovieDetails } from "../../hooks/useMovieDetails"
import { render, screen } from '@testing-library/react';
import MovieDetailsPage from './MovieDetailsPage';

jest.mock('../../hooks/useMovieDetails');

describe('MovieDetailsPage', () => {
  describe("when loading", () => {
    it("shows loading message", () => {
      useMovieDetails.mockReturnValue({ 
        loading: true, 
        error: null, 
        movieDetails: null 
      });

      render(<MovieDetailsPage />)

      expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
  })

  describe("when error", () => {
    it("shows error message", () => {
      useMovieDetails.mockReturnValue({ 
        loading: false, 
        error: { message: 'An error occurred' }, 
        movieDetails: null 
      });

      render(<MovieDetailsPage />)

      expect(screen.getByText('Error: An error occurred')).toBeInTheDocument()
    })
  })

  describe("when no movie details", () => {
    it("shows message indicating no details available", () => {
      useMovieDetails.mockReturnValue({ 
        loading: false, 
        error: null, 
        movieDetails: null 
      });

      render(<MovieDetailsPage />)

      expect(screen.getByText('No details available for this movie.')).toBeInTheDocument()
    })
  })

  describe("when movie details are available", () => {
    it("shows the movie details", () => {
      useMovieDetails.mockReturnValue({ 
        loading: false, 
        error: null, 
        movieDetails: { Title: 'Movie 1', Year: '2020', Plot: 'Movie plot' } 
      });

      render(<MovieDetailsPage />)

      expect(screen.getByText(/Movie 1/)).toBeInTheDocument()
      expect(screen.getByText(/2020/i)).toBeInTheDocument()
      expect(screen.getByText(/Movie plot/)).toBeInTheDocument()
    })
  })
})