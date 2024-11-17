import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import App from '../App'
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/movies" replace />
      },
      {
        path: "/movies",
        element: <MoviesPage />
      },
      {
        path: "/movies/:movieId",
        element: <MovieDetailsPage />
      },
      {
        path: "/wishlist",
        element: <WishlistPage />
      }
    ]
  }
])