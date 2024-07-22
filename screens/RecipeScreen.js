import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { addRecipeToFavorite, removeRecipeToFavorite } from '../reducers/favorites';
import { useDispatch, useSelector } from 'react-redux';


export default function RecipeScreen({ route, props }) {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector((state) => state.favorites.value);
  
  const { ingredients, servingNb, level, time, rating, name, longDesc, image, color} = route.params;
  
  const [nbPeople, setNbPeople] = useState(servingNb);
  const [isBookmark, setIsBookmark] = useState(false);

  useEffect(() => {
      favoriteRecipes.some( e => e.params.name === name) ? setIsBookmark(true): setIsBookmark(false);
  }, []);
  
   
  const allIngredients = ingredients ? ingredients.map((ingredient, index) => (
    <View key={index} style={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        marginLeft: 20, 
                        marginRight: 20, 
                        marginTop: 20}}>
      <Text style={{fontSize: 20}}>{ingredient.name}</Text> 
      <Text style={{fontSize: 20}}>{(ingredient.amount) * nbPeople} {ingredient.unit}</Text>
    </View>
  )): null;

  const handleLess = () => {
    if(nbPeople > 1) {
      setNbPeople(nbPeople - 1)
    }
  }

  const handleMore = () => {
    setNbPeople(nbPeople + 1);
  }

  const handleBookmark = () => {
    if (!isBookmark) {
      dispatch(addRecipeToFavorite(route));
      setIsBookmark(!isBookmark);
      console.log(route);
    } else {
      dispatch(removeRecipeToFavorite(route));
      setIsBookmark(!isBookmark)
    } 
  }
  
  return (
    <View style={styles.container}>
      <Image 
        source={image} 
        style={{
          width: '100%', 
          height: '33%',
          resizeMode: 'contain',
          backgroundColor: color,
          padding: 10,
          borderBottomLeftRadius: 100,
          }}/>

      <TouchableOpacity style={styles.buttonBookmark} onPress={()=>handleBookmark()} >
        <FontAwesome style={isBookmark ? {color: '#fff'} : {}} size={18} name="bookmark" />
      </TouchableOpacity>

          <View style={styles.cookInfo}>
            <View style={styles.icon}>
              <FontAwesome name="map-pin" size={18} style={styles.customIcon}/> 
              <Text style={styles.cookTextStyle}>{level}</Text>
            </View>
            <View style={styles.icon}>
              <FontAwesome name="hourglass" size={18} style={styles.customIcon} /> 
              <Text style={styles.cookTextStyle}>{time}</Text>
            </View>
            <View style={styles.icon}>
              <FontAwesome name="star" size={18} style={styles.customIcon}/> 
              <Text style={styles.cookTextStyle}>{rating}</Text>
            </View>
          </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{longDesc}</Text>
      <View style={styles.howMany}> 
        <View> 
          <Text style={styles.ingredients}>Ingredients</Text>
          <Text style={styles.question}>How many servings?</Text>
        </View>
        <View style={styles.choose}> 
          <TouchableOpacity style={{padding: 20}}  onPress={()=>handleLess()}>
            <Text style={{fontSize: 20,fontWeight: "bold"}} >-</Text>
          </TouchableOpacity>
          <Text style={{padding: 20, fontSize: 20}}>{nbPeople}</Text>
          <TouchableOpacity style={{padding: 20}}  onPress={()=>handleMore()}>
            <Text style={{fontSize: 20, fontWeight: "bold"}} >+</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.menus}>
        {allIngredients}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: '60%', 
    height: '33%',
    resizeMode: 'contain',
  },
  cookInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   // borderTopRightRadius: 100,
    marginVertical: 10,
  },
  icon: {
    alignItems: 'center',
    fontWeight: "bold",
  },
  name: {
    fontSize: 40,
    marginLeft: 15,
  },
  desc: {
    marginHorizontal: 10,
  },
  howMany: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: 5,
    marginHorizontal: 10,
  },
  ingredients: {
    fontWeight: "bold",
    fontSize: 20,
  },
  choose: {
    fontWeight: "bold",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginRight: 20,
    backgroundColor: '#F2F2F2',
    //padding: 20,
    borderRadius: 50,
  },
  buttonBookmark: {
    marginLeft: 'auto',
    marginBottom: 'auto',
    marginTop: -40,
    marginRight: 10,
    backgroundColor: '#9D9EA3',
    padding: 20,
    borderRadius: 50,
    
  },
  customIcon: {
    color: '#FF3777',
  },
  menus: {
    fontSize: 20,
    paddingBottom: 20,
  },
  cookTextStyle: {
    fontSize: 16,
    marginTop: 5,
  }
  
});
