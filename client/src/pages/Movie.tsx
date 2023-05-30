import { View, Text } from "react-native"
import { useParams } from 'react-router-native'
import { useSearchMovie } from "../hooks/useSearchMovie"

export function Movie () {

  let { id } = useParams()
  const { movie, isLoading, error } = useSearchMovie(id)

    console.log(movie)
  return(
    <View>
      <Text>MOVIE: {id} </Text>
    </View>
  )
}