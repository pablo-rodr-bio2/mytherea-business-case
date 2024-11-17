import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import App from '../App'
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/movies" replace={true} />
      },
      {
        path: "/movies",
        element: <MoviesPage />
      },
      {
        path: "/wishlist",
        element: <WishlistPage />
      }
    ]
  }
])