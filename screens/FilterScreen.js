import React,{useState,useCallback} from 'react'
import {View,Text,StyleSheet, Switch,TouchableOpacity,Image} from 'react-native'
import {useDispatch} from 'react-redux'
import {setFilters} from '../store/actions/mealsAction'
import Colors from '../constants/Colors'

const FilterSwitch = (props) =>{
    return(
        <View style={styles.filterContainer}>
          <Text style={styles.customFont2}>{props.lable}</Text>
          <Switch  trackColor={{ false: "#767577", true: "#81b0ff" }}
           thumbColor={props.state ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={props.onChage} 
            value={props.state}
            />
        </View>
    )
}

const FilterScreen = (props) => {
//  const {navigation} = props

    const [isGlutenFree, setisGlutenFree] = useState(false)
    const [isLactoseFree,setisLactoseFree] = useState(false)
    const [isVegetarian,setisVegetarian] =   useState(false)
    const [isVegan, setisVegan] = useState(false)

    const saveFilters = useCallback( () =>{
        const appliedFilters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegetarian: isVegetarian,
            isVegan: isVegan
        }
    },[isGlutenFree,isLactoseFree,isVegan,isVegetarian])
    let appliedFilters = {}
        // React.useEffect(() => {
      
        //  appliedFilters = {
        //     isGlutenFree: isGlutenFree,
        //     isLactoseFree: isLactoseFree,
        //     isVegetarian: isVegetarian,
        //     isVegan: isVegan
        // }
     
        // }, [isVegetarian,isLactoseFree,isGlutenFree,isVegan])
        const dispatch = useDispatch()
     handleFilter = () =>{
       const appliedFilters  = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegetarian: isVegetarian,
            vegan: isVegan
        }
        dispatch(setFilters(appliedFilters))
     }   

    React.useEffect(()=>{
        props.navigation.setOptions({
            headerStyle: {
             backgroundColor: Colors.primaryColor,
            },
             headerTintColor: '#fff',
              headerRight: () => (
                <TouchableOpacity style={{width:60}} onPress={()=>handleFilter()}>
                    <Text style={styles.customFont}>Save</Text>
                </TouchableOpacity>
              ),
            });
    },[isGlutenFree,isLactoseFree,isVegetarian,isVegan])
   
      
        
     

      const toggleSwitchGlutenFree = () =>{ 
          setisGlutenFree(previousState => !previousState); 
      }
      const toggleSwitchLactoseFree = () =>{
        setisLactoseFree(previousState => !previousState);
      }
      const toggleSwitchVegetarian = () =>{
        setisVegetarian(previousState => !previousState);
      }
      const toggleSwitchVegan = () =>{
        setisVegan(previousState => !previousState);
      }

    return (
    <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
      
        <FilterSwitch lable='Gluten - free' state={isGlutenFree} onChage={toggleSwitchGlutenFree} />
        <FilterSwitch lable='Lactose - free' state={isLactoseFree} onChage={toggleSwitchLactoseFree} />
        <FilterSwitch lable='Vegetarian' state={isVegetarian} onChage={toggleSwitchVegetarian} />
        <FilterSwitch lable='Vegan' state={isVegan} onChage={toggleSwitchVegan} />
        

        {/* <View style={styles.filterContainer}>
          <Text>Gluten-free</Text>
          <Switch   trackColor={{ false: "#767577", true: "#81b0ff" }}
           thumbColor={isGlutenFree ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={newValue=>setisGlutenFree(newValue)} 
            value={isGlutenFree}
            />
        </View> */}
        
    </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center"
    },
    customFont:{
        fontFamily:'Goldman-Bold',
        color:'#fff'
    },
    customFont2:{
        fontFamily:'Goldman-Regular'
    },
    filterContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"80%",
        marginVertical:15
    },
    title:{
     fontFamily:"Goldman-Bold",
     fontSize:16,
     margin:20,
    textAlign:"center"
    }
})
export default FilterScreen
