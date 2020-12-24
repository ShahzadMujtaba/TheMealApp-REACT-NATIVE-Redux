import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {useSelector} from 'react-redux' 

import MealList from '../components/MealList'
import {MEALS} from '../data/DummyData'

const FavoritesScreen = (props) => {

    const availableMeals = useSelector(state=>state.meals.favourateMeals)

    // const favMEAlS = MEALS.filter(meal => meal.id=='m1' || meal.id=='m2')
    if(availableMeals.length === 0){
        return(
            <View style={styles.screen}>
                <Text style={styles.customFont}>Start Adding Favourate Meals</Text>
            </View>
        )
    }
    
    return (
       <MealList listDisplay={availableMeals} navigation={props.navigation} />
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    customFont:{
        fontFamily:'Goldman-Bold'
      },
})

export default  FavoritesScreen
