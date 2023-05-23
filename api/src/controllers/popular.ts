/* import { API_URL, POPULAR_PATH } from '../data/constants' */
import { type PopularMovies } from '../types'
/* import { env } from 'process'

const API_KEY: string = env.production ? env.production : env.API_KEY */

// const API_KEY = '1fdf19c0ae38cd29cc36b8c814b47e6b'

export const fetchMovies = async (): Promise<PopularMovies[]> => {
  console.log('fetchMovies //////////////////////////')
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=1fdf19c0ae38cd29cc36b8c814b47e6b', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmRmMTljMGFlMzhjZDI5Y2MzNmI4YzgxNGI0N2U2YiIsInN1YiI6IjY0MDdhMDY4ZDM0ZWIzMDA3ZTgyZWU5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l3F-JvMyveEgXlqT5_xXpZhyAlAXKHn4_xJYDefob6c'
    }
  })
  console.log(response)
  const resp: PopularMovies[] = await response.json()
  return resp
}
