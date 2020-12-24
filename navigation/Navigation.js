import React from 'react'
import {View,Text,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CatogeryScreen from '../screens/CatogeryScreen';
import FilterScreen from '../screens/FilterScreen';
import CatogeryMealsScreen from '../screens/CatogeryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen'

const stack = createStackNavigator();

const drawer = createDrawerNavigator()

const Tab = createMaterialBottomTabNavigator();

const HomeStack = () =>{
    return(
     <stack.Navigator>
        <stack.Screen name="CatogeryScreen" component={CatogeryScreen}  options={{title:"Catogeries", headerTintColor: '#fff',headerTitleAlign:"center" }}  />
        <stack.Screen name="CatogeryMealsScreen" component={CatogeryMealsScreen}  
             options={({ route }) => ({ title: route.params.headerTitel,
            headerStyle: {
            backgroundColor: route.params.headerColor,
          },
           headerTintColor: '#fff',
           headerTitleStyle: {
            fontFamily:'Goldman-Bold'
          }, })}  />
        <stack.Screen name="MealDetailsScreen" component={MealDetailsScreen}   
           options={({ route }) => ({ title: route.params.headerTitel,
            headerStyle: {
            backgroundColor: route.params.headerColor,
          },
           headerTintColor: '#fff',
           headerTitleStyle: {
            fontWeight: 'bold',
            // fontFamily:'Goldman-Bold'
          }, })}  />
    </stack.Navigator>
    )
}

const FavoriteStack = () =>{
    return(
    <stack.Navigator>
        <stack.Screen name="Favorire" component={FavoritesScreen} options={{headerShown:false}} />
        <stack.Screen name="MealDetailsScreen" component={MealDetailsScreen}   
           options={({ route }) => ({ title: route.params.headerTitel,
            headerStyle: {
            backgroundColor: route.params.headerColor,
          },
           headerTintColor: '#fff',
           headerTitleStyle: {
            fontWeight: 'bold',
            // fontFamily:'Goldman-Bold'
          }, })}  />
    </stack.Navigator>
    )
}

const TabStack = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Favorite" component={FavoriteStack} /> 
        </Tab.Navigator>
    )
    
}
 
const DrawerNAvigation = () =>{
    return(
        <drawer.Navigator>
                <drawer.Screen name="Home" component={TabStack} options={{ headerShown:false }} />
                <drawer.Screen name="FilterScreen" component={FilterScreen} options={{title:'Filter',headerTitleAlign:"center"}} />
                {/* <TabStack /> */}
       </drawer.Navigator>
      
    )
}

const Navigation = () =>{
    return(
        <NavigationContainer>
            
            {/* <drawer.Navigator>
                <drawer.Screen name="Home" component={HomeStack} options={{ headerShown:false }} />
                <drawer.Screen name="FilterScreen" component={FilterScreen} />
            </drawer.Navigator> */}
           <DrawerNAvigation />
          {/* <TabStack /> */}
        </NavigationContainer>
        
    )
}
export default Navigation






