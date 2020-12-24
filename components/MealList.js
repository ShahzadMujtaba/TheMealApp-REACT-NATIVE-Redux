import React from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'
import MealItem from './MealItem'
import Colors from '../constants/Colors'

const MealList = (props) => {

    const renderMealItem = (itemData) =>{
        return(
            
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration} 
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={()=>props.navigation.navigate('MealDetailsScreen',
                {headerTitel:itemData.item.title,
                headerColor:Colors.primaryColor,
                mealId:itemData.item.id})} />
        )
    }

    return (
    <View style={styles.screen}>
        <FlatList 
         showsVerticalScrollIndicator={false}
        data={props.listDisplay} 
        keyExtractor={(item, index)=>item.id}  
        renderItem={renderMealItem}
        style={{width:"97%"}} />
    </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default MealList
