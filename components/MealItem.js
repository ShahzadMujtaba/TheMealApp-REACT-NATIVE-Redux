import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Platform, TouchableNativeFeedback,ImageBackground} from 'react-native'
import { color } from 'react-native-reanimated';

const MealItem = (props) => {
    let TouchableComp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.OS>=21){
        TouchableComp  = TouchableNativeFeedback
    }
    return (
        <View style={styles.mealItem}>
            <TouchableComp onPress={props.onSelectMeal} style={{flex:1}}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        {/* <Text>{props.title}</Text> */}
                        <ImageBackground source={{uri:props.image}} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                             <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetails}}>
                         <Text>{props.duration} m</Text>
                         <Text>{props.complexity.toUpperCase()}</Text>
                         <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableComp>
        </View>
        
    )
}

const styles = StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:"#f5f5f5",
        marginVertical:'2%',
        overflow:"hidden",
        borderRadius:10
    },
    bgImage:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-end",  
    },
    mealRow:{
        flexDirection:"row"
        
    },
    mealHeader:{
        height:"85%"
    },
    mealDetails:{
        height:"15%",
        paddingHorizontal:14,
        justifyContent:"space-between",
        alignItems:"center"
    },
    titleContainer:{
     backgroundColor:'rgba(0, 0, 0, 0.5)',
     paddingVertical:5,
     paddingHorizontal:12,
    },
    title:{
    fontFamily:'Goldman-Bold',
    color:"white",
    fontSize:16,
    textAlign:"center"
  }
})
export default MealItem
