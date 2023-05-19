import { useEffect, useState } from 'react'
import { API_URL, POPULAR_PATH, API_KEY } from '../data/servicesConstants'
import { PopularMovies } from '../types.d'

export function useSearchPopular () {
  const [popularMovies, setPopularMovies] = useState<PopularMovies[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState(null)

  useEffect(()=> {
    const abortController = new AbortController()
    setIsLoading(true)
    
    fetch(`${API_URL}${POPULAR_PATH}${API_KEY}`, { signal: abortController.signal })
    .then(res => res.json())
    .then(response => setPopularMovies(response.results))
    .catch((error) => setError(error))
    .finally(() => setIsLoading(false))

    return () => abortController.abort()
  }, [])

  return { popularMovies, isLoading, error }
}