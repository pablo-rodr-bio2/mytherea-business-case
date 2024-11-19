import { useEffect, useState } from "react";
import { API_KEY } from "../constants/api_key";

const getMovieDetails = async (movieId) => {
  const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`);
  return await response.json()
}

export const useMovieDetails = (movieId) => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
    
      try {
        const data = await getMovieDetails(movieId);
        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    }
  }, [movieId])

  return {
    loading,
    error,
    movieDetails: data
  }
}