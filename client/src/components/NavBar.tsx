import { View, Text, StyleSheet, Image } from 'react-native'

export function NavBar () {
  return(
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cinema Home</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.menuContainer}>
        <Image source={require('../assets/icons/menu.png')} style={styles.menuLogo} />
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 1
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontFamily: 'sans-serif',
  },
  menuContainer: {
    flex: 0.3,

  },
  menuLogo: {
    width: 45,
    height: 45
  },
  separator: {
    borderEndWidth: 1,
    borderEndColor: 'black'
  }

})