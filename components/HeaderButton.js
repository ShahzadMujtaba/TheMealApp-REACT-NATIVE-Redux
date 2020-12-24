import React from 'react'
import {View,Text,TouchableOpactiy,Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderButton, } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors'
const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} 
        color={Platform.OS === 'android'?'white':Colors.primaryColor} 
        IconComponent={Ionicons} 
        iconSize={23} />
    )
}

export default CustomHeaderButton
