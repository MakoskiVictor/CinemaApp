import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { StyleSheet, Text, View } from 'react-native'
import { useSearchPopular } from '../hooks/useSearchPopular'
import { Card } from '../components/Cards/Card'


export function PopularMovies() {

   const { popularMovies, isLoading, error } = useSearchPopular()

  return (
    <View style={styles.container} >
        <View>
          { error && <Text>{error}</Text> }
          { isLoading && <Text>Loading...</Text> }
          { isLoading === false &&
            <Card popularMovies={popularMovies} />
            } 
            
          </View>
        <StatusBar style="auto" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
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