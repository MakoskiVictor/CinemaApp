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