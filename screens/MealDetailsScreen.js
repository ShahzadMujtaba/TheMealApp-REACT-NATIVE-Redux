import React,{useState,useEffect}from 'react'
import {ScrollView,View,Text,StyleSheet,Button,TouchableOpacity,Image} from 'react-native'
import {MEALS} from '../data/DummyData'
import {toggleFavorite } from '../store/actions/mealsAction'
import {useSelector,useDispatch} from 'react-redux'
import {connect} from 'react-redux'



const ListItem = (props) =>{
  return(
    <View style={styles.ListItem}>
      <Text style={styles.customFont2} >{props.children}</Text>
    </View>
  )
}

const MealDetailsScreen = (props) => {
  const {mealId} = props.route.params
      // const selectedMeal =  MEALS.find(meal=>meal.id === mealId)

      //  const selectedMeal =  props.Meals.find(meal=>meal.id === mealId)

      const availableMeals = useSelector(state => state.meals.meals)
      
      const currentFav = useSelector(state=>state.meals.favourateMeals.some(meal => meal.id === mealId))

      const selectedMeal =  availableMeals.find(meal=>meal.id === mealId)

      // const dispatch = useDispatch()

      const toggleFavoriteHandler = ()=>{
        // dispatch(toggleFavorite(mealId))
        props.toggleFavorite(mealId)
      }
     

      React.useEffect(() => {
        props.navigation.setOptions({
          headerRight: () => (
            
            <TouchableOpacity style={{width:40}} onPress={()=>toggleFavoriteHandler()}>
               <Image
               style={styles.tinyLogo}
               source={currentFav?require('../assets/images/color-start.jpg'):require('../assets/images/download1.jpg')}
              />
                
            </TouchableOpacity>
          ),
        });
        
      }, [props.navigation,currentFav]);

    return (
      <ScrollView>
        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.customFont}>{selectedMeal.duration} m</Text>
          <Text style={styles.customFont}>{selectedMeal.complexity.toUpperCase()}</Text>
          <Text style={styles.customFont}>{selectedMeal.affordability.toUpperCase()}</Text> 
        </View>
          <Text style={styles.title}>Ingredients</Text>
          {/* <Text>List Of Ingredients...</Text> */}
            {selectedMeal.ingredients.map(ingredient=><ListItem key={ingredient}>{ingredient}</ListItem>)}
          <Text style={styles.title}>Steps</Text>
          {selectedMeal.steps.map(step=><ListItem key={step}>{step}</ListItem>)}
       
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  tinyLogo:{
    width:30,
    height:30
   },
    image:{
      width:"100%",
      height:200
    },
    details:{
      flexDirection:"row",
      padding:15,
      justifyContent:"space-around"
    },
    customFont:{
        fontFamily:'Goldman-Bold'
      },
      customFont2:{
        fontFamily:'Goldman-Regular'
      },
     title:{
      fontFamily:'Goldman-Bold',
      fontSize:22,
      textAlign:"center",
      color:"green"
     },
     ListItem:{
       marginVertical:10,
       marginHorizontal:15,
       borderColor:'#f5428d',
       borderWidth:1,
       padding:10
     }
})

const mapStateToProps = (state) =>{
  // console.log("check favourite",state.meals.favourateMeals.some(meal=>meal.id=='m4'))
  return{
    Meals:state.meals.meals,
    
  }
}

export default connect(mapStateToProps,{toggleFavorite}) (MealDetailsScreen)
