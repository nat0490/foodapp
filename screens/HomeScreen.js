import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/home.jpg')} />
      <View style={styles.bottom}> 
        <Text style={styles.text}> FoodApp </Text>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigator', { screen: 'Search' })}>
          <Text style={styles.button}>Let's go! → </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#615171',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '80%', 
    borderBottomLeftRadius: 150, 
    resizeMode: 'cover', 
  }, 
  bottom: {
    marginTop: 'auto',
    marginLeft: 0,
    marginRight: 10,
  },
  text: {
    color:'#fff',
    fontSize: 80,
    textAlign: 'left',
    // backgroundColor: 'red',
   
  },
  button: {
    color: '#fff',
    marginLeft: 'auto',
    fontSize: 20,
    marginRight: 20,
    marginBottom: 30,
  } 
});
