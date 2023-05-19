import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { IMAGE_INIT_PATH } from '../../data/servicesConstants';
import { PopularMovies } from '../../types';

export function Card ( {popularMovies} : PopularMovies[]) {
  console.log(popularMovies)
  return(
    <FlatList style={{ backgroundColor: 'red' }} data={popularMovies} renderItem={( {item} ) => (
      <View key={item.id}>
        <Text>{item.title}</Text>
        <View>
        <Image source={{uri: `${IMAGE_INIT_PATH}${item.poster_path}` }} style={styles.image} />
        </View>
        <View>
          <Text>Original Language: {item.original_language} </Text>
          <Text>Stars: {item.vote_average} </Text>
          <Text>Overview: {item.overview}  </Text>
        </View>
      </View>
    )} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
  }
});