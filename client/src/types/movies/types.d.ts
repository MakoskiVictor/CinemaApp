import { ImageURISource } from "react-native/types"

export interface PopularMovies {
  id: number
  title: string
  otiginal_title: string
  original_language: string
  poster_path: ImageURISource
  vote_average: number
  overview: string
}

export interface PopularMoviesChildren {
  popularMovies: PopularMovies[];
}

export interface SingleMovie {
  adult: boolean
  genres: Genres[]
  id: number
  images: {
    poster1: string
    poster2: string
    poster3: string
    poster4: string
  }
  language: string
  overview: string
  release: string
  score: number
  status: string
  tagline: string
  title: string
  total_votes: number
}

interface Genres {
      id: number, 
      name: string 
}

export interface SingleMovieChildren {
  singleMovie: SingleMovie[]
}