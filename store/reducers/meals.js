import {MEALS} from '../../data/DummyData'
import {TOGGLE_FAVORITE} from '../actions/mealsAction'
import {SET_FILTERS} from '../actions/mealsAction'

const initialState = {
    meals:MEALS,
    filteredMeals:MEALS,
    favourateMeals:[],
}

const mealsReducer = (state = initialState, action) =>{
    switch(action.type){
        case TOGGLE_FAVORITE: 
          const existingIndex = state.favourateMeals.findIndex(meal=>meal.id === action.mealId)
          if(existingIndex>=0){
            const updatedFavMeals = [...state.favourateMeals]
            updatedFavMeals.splice(existingIndex,1)
            return {...state, favourateMeals:updatedFavMeals}
          }else{
            const meal = state.meals.find(meal=>meal.id === action.mealId)
            return {...state, favourateMeals:state.favourateMeals.concat(meal)}
          }
         case SET_FILTERS:
           const appliedFilters = action.filters
           const updatedFilteredMeals = state.meals.filter(meal =>{
             if(appliedFilters.lactoseFree && !meal.isLactoseFree){
               return false
             }
             if(appliedFilters.vegetarian && !meal.isVegetarian){
               return false
             }
             if(appliedFilters.glutenFree && !meal.isGlutenFree){
               return false
             }
             if(appliedFilters.vegan && !meal.isVegan){
               return false
             }
             return true
           }) 
           return {...state, filteredMeals:updatedFilteredMeals}
        default:
            return state
    }
    // return(
    //  state
    // )
}

export default mealsReducer