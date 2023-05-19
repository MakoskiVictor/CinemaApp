import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { useSearchPopular } from './src/hooks/useSearchPopular';
import { IMAGE_INIT_PATH } from './src/data/servicesConstants';
import { Card } from './src/components/Cards/Card';


export default function App() {

   const { popularMovies, isLoading, error } = useSearchPopular()

  return (
      <View style={styles.container} >
        <Text style={styles.title} >Cinema Home</Text>
        <View>
          { error && <Text>{error}</Text> }
          { isLoading && <Text>Loading...</Text> }
          { isLoading === false &&
            <Card popularMovies={popularMovies} />
            } 
            
          </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
     flexGrow: 1 
  },
  title: {
    marginTop: Constants.statusBarHeight,
    fontSize: 30,
    fontFamily: 'sans-serif'
  },
  image: {
    width: 200,
    height: 300,
  }
});
