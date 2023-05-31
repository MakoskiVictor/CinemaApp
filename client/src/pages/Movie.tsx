import { View, StyleSheet } from "react-native"
import { useParams } from 'react-router-native'
import { useSearchMovie } from "../hooks/useSearchMovie"
import { DetailedCard } from "../components/Cards/DetailedCard"

export function Movie () {

  let { id } = useParams()
  const { movie, isLoading, error } = useSearchMovie(id)

   console.log(movie)
  return(
    <View style={styles.view}>
      <DetailedCard singleMovie={movie} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyItems: 'center'
  }
})

