import { View, StyleSheet, ImageBackground } from 'react-native'
import { Routes, Route } from 'react-router-native'
import { PopularMovies } from './PopularMovies'
import { NavBar } from '../components/NavBar'
import Constants from 'expo-constants'


export function Main () {
  return(
    <View style={styles.container}>
      <NavBar />
      <ImageBackground source={require('../assets/backgrounds/gradient.jpg')} resizeMode="cover" style={styles.image}>
        <Routes >
          <Route path='/' Component={PopularMovies }/>         
        </Routes>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  }
})
