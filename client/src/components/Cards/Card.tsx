import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { IMAGE_INIT_PATH } from '../../data/servicesConstants'
import { type PopularMoviesChildren } from '../../types'
import { Link } from 'react-router-native'

export function Card ( {popularMovies} : PopularMoviesChildren): JSX.Element {


  return(
    <FlatList showsVerticalScrollIndicator={false} style={styles.flatList} data={popularMovies} renderItem={( {item} )  => (
      <Link to={`/movie/${item.id}`}>
      <View style={styles.card}  key={item.id}>
        <Image source={{uri: `${IMAGE_INIT_PATH}${item.poster_path}` }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text>Score: {item.vote_average} </Text>
        </View>
        </Link>
    )} />
  )
}

const styles = StyleSheet.create({
  flatList: {

  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    width: 300,
    borderColor: 'black'
  },
  title: {
    fontSize: 20,
    fontFamily: 'notoserif',
  },
  image: {
    width: 300,
    height: 400,
    objectFit: 'fill',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  }
});