import { useEffect, useState } from 'react'
import { API_URL, API_KEY } from '../data/servicesConstants'
import { singleMovieAdapter } from '../utils/adapters/singleMovieAdapter'

export function useSearchMovie (id : string | undefined) {
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState(null)

  useEffect(()=> {
    if(id !== undefined) {

      const abortController = new AbortController()
      setIsLoading(true)
      
      fetch(`${API_URL}/movie/${id}?language=en-US${API_KEY}`, { signal: abortController.signal })
      .then(res => res.json())
      .then(res => singleMovieAdapter(res))
      .then(response => setMovie(response))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false))

      return () => abortController.abort()
    }
  }, [])

  return { movie, isLoading, error }
}