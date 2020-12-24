import React from 'react'
import {View,Text,StyleSheet,Button,FlatList, TouchableOpacity,Image} from 'react-native'
import{ Categories} from '../data/DummyData'
import Colors from '../constants/Colors'
import CategoryGridsTile from '../components/CategoryGridsTile'


const CatogeryScreen = (props) => {


    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerStyle: {
                backgroundColor: Colors.primaryColor,
              },
              headerTitleStyle: {
                // fontWeight: 'bold',
                fontFamily:'Goldman-Bold'
              },
          headerLeft: () => (
            
            <TouchableOpacity style={{marginLeft:20}} onPress={()=>props.navigation.openDrawer()}>
             <Text style={{color:"white",fontFamily:'Goldman-Bold'}}>
                Drawer  
             </Text>
            </TouchableOpacity>
          ),
        });
        
      }, [props.navigation]);


    const renderGridItem = (itemData) =>{
        return (
            <CategoryGridsTile title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={()=>props.navigation.navigate('CatogeryMealsScreen',
            {headerTitel:itemData.item.title, 
            headerColor:Colors.primaryColor,
            id:itemData.item.id})} />
        )
    }
    return (
       
        <FlatList 
         numColumns={2}
         showsVerticalScrollIndicator={false}
         data={Categories}
         renderItem={renderGridItem}
         keyExtractor={(item,index)=>item.id}
        />
    )
}

CatogeryScreen.navigationOption

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    custom:{
        fontFamily:'Goldman-Bold'
      },
      gridItem:{
         flex:1,
         margin:15,
         height:150 ,
         borderRadius:10
      }
})
export default CatogeryScreen
