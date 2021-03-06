import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity, Platform,TouchableNativeFeedback} from 'react-native'

const CategoryGridsTile = (props) => {
    let TouchableComp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version>=21){
        TouchableComp = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem} >
            <TouchableComp  style={{flex:1}} onPress={props.onSelect} >
                <View style={{...styles.container,...{backgroundColor:props.color}}} >
                    <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
                </View>
            </TouchableComp>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150 ,
        borderRadius:10,
        elevation:5,
        overflow:"hidden"
        
     },
     container:{
        flex:1,
        borderRadius:10,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:0.26,
        elevation:3,
        padding:6,
        justifyContent:"flex-end",
        alignItems:"flex-end"
     },
     title:{
        fontFamily:'Goldman-Bold',
        fontSize:16
     }
})
export default CategoryGridsTile
