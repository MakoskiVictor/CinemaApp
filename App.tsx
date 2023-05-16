import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { useSearchPopular } from './src/hooks/useSearchPopular';


export default function App() {

   const { popularMovies, isLoading, error } = useSearchPopular()

  return (
      <View style={styles.container} >
        <Text>Cinema Home</Text>
        <View>
          { error && <Text>{error}</Text> }
          { isLoading && <Text>Loading...</Text> }
          { isLoading === false &&
            <FlatList data={popularMovies} renderItem={( {item} ) => (
              <View key={item.id}>
                <Text>{item.title}</Text>
                <Image source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }} style={styles.image} />
              </View>
            )} />
            
          }
          </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
     flexGrow: 1 
  },
  image: {
    width: 200,
    height: 300,
  }
});
