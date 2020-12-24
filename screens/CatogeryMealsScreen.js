import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Button} from 'react-native'
import MealItem from '../components/MealItem';
import {Categories,MEALS} from '../data/DummyData'
import Colors from '../constants/Colors'
import MealList from '../components/MealList';
import {connect} from 'react-redux'
// import {useSelector} from 'react-redux'


const CatogeryMealsScreen = (props) => {
     const {id} = props.route.params;
     const catId = id;

   const displayedMeals =  props.Meals.filter(meal =>meal.categoryIds.indexOf(catId) >= 0)
    return (
       
        <MealList listDisplay={displayedMeals} navigation={props.navigation} />
    )
}

const mapStateToProps = (state) =>{
    // console.log(state.meals.filteredMeals)
  return {
     Meals: state.meals.filteredMeals
  }
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default connect(mapStateToProps) (CatogeryMealsScreen)
