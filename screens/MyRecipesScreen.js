import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector, useState } from 'react-redux';
import {recipes} from '../data/recipes';

export default function MyRecipesScreen({navigation}) {
  const favoriteRecipes = useSelector((state) => state.favorites.value);
  console.log(favoriteRecipes);

  const handlePress = (menu) => {
    navigation.navigate('Recipe', menu );
  };

  const favory = favoriteRecipes.map((recette,i) => {
    return (
    <TouchableOpacity  
        key={i} 
        style={{
          backgroundColor: `${recette.params.color}`, 
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
        onPress={()=> handlePress(recette.params)}>
        <Image 
          source={recette.params.image} 
          style={{ 
            width: '100%', 
            height: '50%',
            resizeMode: 'contain',
          }}/>
        <Text style={{paddingHorizontal: 5, width: '100%', fontWeight: 'bold', textAlign: 'right'}}>{recette.params.name}</Text>
        <Text style={{paddingHorizontal:5, width: '100%', textAlign: 'right'}}>{recette.params.desc}</Text>
      </TouchableOpacity >
  )}) /*: null*/

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>The best one...</Text>
      <ScrollView contentContainerStyle={styles.menus}>
        {favory}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  titre: {
    marginLeft: 10,
    fontSize: 40,
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
