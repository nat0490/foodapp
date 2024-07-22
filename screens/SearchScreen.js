import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity  } from 'react-native';
import {recipes} from '../data/recipes';


export default function SearchScreen({navigation}) {

  const handlePress = (menu) => {
    navigation.navigate('Recipe', menu);
  };

  const allRecipes = recipes.map(recip => {
    return (
      <TouchableOpacity  
        key={recip.id} 
        style={{backgroundColor: `${recip.color}`, 
          width: '45%', 
          height: 300, 
          margin: 5, 
          borderBottomLeftRadius: 100, 
          borderBottomRightRadius: 30,
          borderTopLeftRadius:30,
          borderTopRightRadius:100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={()=> handlePress(recip)}>
        <Image 
          source={recip.image} 
          style={{ 
            width: '100%', 
            height: '50%',
            resizeMode: 'contain',
          }}/>
        <Text style={{marginLeft: 10, marginRight: 10, fontWeight: 'bold', textAlign: 'right'}}>{recip.name}</Text>
        <Text style={{paddingHorizontal:5, width: '100%', textAlign: 'right'}}>{recip.desc}</Text>
      </TouchableOpacity >
    )
  })

  
  
  return (
    <View style={styles.container}>
      <Text style={styles.question}>What do you want to eat today?</Text>
      <Text style={styles.phrase}>Our daily healthy meal plans</Text>
      <ScrollView contentContainerStyle={styles.menus}>
        {allRecipes}
      </ScrollView>
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  question: {
    marginLeft: 10,
    fontSize: 40,
  },
  phrase: {
    marginLeft: 10,
  },
  menus: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flex: 1,
    flexGrow: 1,
    // minHeight: '400%',
    // marginBottom: 30,
    paddingBottom: 20,
  },
  
});
