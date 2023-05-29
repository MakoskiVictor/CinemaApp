import { NativeRouter } from 'react-router-native'
import { Main } from './src/pages/Main'

import { StyleSheet } from 'react-native'
 
export default function App() {
  return (

    <NativeRouter>
      <Main />
    </NativeRouter>
      
  )

}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})

