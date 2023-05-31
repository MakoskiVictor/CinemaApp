import { View, Text, Image, FlatList, StyleSheet } from "react-native"
import { IMAGE_INIT_PATH } from "../../data/servicesConstants"
import { type SingleMovieChildren } from "../../types/movies/types"

export function DetailedCard ({singleMovie} : SingleMovieChildren) {

  return(
    <FlatList showsHorizontalScrollIndicator={false} data={singleMovie} renderItem={({ item }) => (
      <View key={item.id} style={styles.Card}>
        <View style={styles.headersContainer}>
          <Text style={styles.title}> {item.title} </Text>
        </View>
        <View style={styles.headersContainer}>
          <Text style={styles.text} > {item.tagline} </Text>
        </View>
        <View>
          <Image source={{uri: `${IMAGE_INIT_PATH}${item.images.poster1}` }} style={styles.Image} />
        </View>
        <View>
          <View style={styles.genreContainer} >
            <Text style={styles.text} >Classification: {item.adult === false ? 'General Audiences' : 'PG-18'}</Text>
            </View>
            <View style={styles.genreContainer} >
            <Text style={styles.text}>Genres: { `${item.genres[0]?.name}, ${item.genres[1]?.name}, ${item.genres[2]?.name}` }</Text>
          </View>
          <View style={styles.viewContainer} >
            <Text style={styles.text}>Language: {item.language}</Text>
            <Text style={styles.text}>Release: {item.release} </Text>
          </View>
          <View style={styles.viewContainer} >
            <Text style={styles.text}> Score: {item.score} </Text>
            <Text style={styles.text}> Total Votes: { item.total_votes } </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}> {item.overview} </Text>
          </View>
        </View>
      </View>
    )} >

    </FlatList>
  )
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyItems: 'center',
    width: 425,
    borderRadius: 5
  },
  title: {
    fontSize: 28,
    fontFamily:  'sans-serif-light',
    fontStyle:  'italic'
  },
  text: {
    fontFamily:  'sans-serif',
    fontSize: 14,
    flexWrap:  'wrap',
    fontStyle:   'italic'
  },
  headersContainer: {
    padding: 5
  },
  genreContainer: {
    alignItems: 'center',
    padding: 5
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5
  },
  textContainer: {
    width: 400,
    padding: 5
  },
  Image: {
    width: 300,
    height: 400
  }
})