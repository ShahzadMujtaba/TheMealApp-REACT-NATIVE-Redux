
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigation from './navigation/Navigation';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import CatogeryScreen from './screens/CatogeryScreen';
import mealsReducer from './store/reducers/meals'

 const rootReducer = combineReducers({meals:mealsReducer})
const store = createStore(rootReducer)

const App = () => {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#f5428d" barStyle="white" />
      <Provider store={store} >
         <Navigation />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  custom:{
    fontFamily:'Goldman-Bold'
  }
});

export default App;
