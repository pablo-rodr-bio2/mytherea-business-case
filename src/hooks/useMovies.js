import { useEffect, useState } from "react"
import { API_KEY } from "../constants/api_key";

const getMovies = async (category) => {
  const response = await fetch(`http://www.omdbapi.com/?s=${category}&apikey=${API_KEY}`);
  return await response.json()
}

export const useMovies = (category) => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
    
      try {
        const data = await getMovies(category);
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
  }, [category])

  
  return {
    loading,
    error,
    movies: data?.Search
  }
}