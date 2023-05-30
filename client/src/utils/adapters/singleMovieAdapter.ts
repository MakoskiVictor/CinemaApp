import { type Movie } from '../../types/adapters/Movie'

export const singleMovieAdapter = (props : Movie) => {
  let arrayMovie = []
  arrayMovie.push(props)
  
  const mappedMovie = arrayMovie.map((x) => {
    return {
      id: x.id,
      title: x.original_title,
      tagline: x.tagline,
      languaje: x.original_language,
      status: x.status,
      release: x.release_date,
      score: x.vote_average,
      total_votes: x.vote_count,
      adult: x.adult,
      overview: x.overview,
      images: {
        poster1: x.poster_path,
        poster2: x.belongs_to_collection?.poster_path,
        poster3: x.backdrop_path,
        poster4: x.belongs_to_collection?.backdrop_path
      },
      genres: [
        {
          id: x.genres[0]?.id,
          name: x.genres[0]?.name
        },
        {
          id: x.genres[1]?.id,
          name: x.genres[1]?.name
        },
        {
          id: x.genres[2]?.id,
          name: x.genres[2]?.name
        }
      ]
    }
  })

  return mappedMovie
}