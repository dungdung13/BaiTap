/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myAppReducer from './source/redux/reducers';
import { ADM001 } from './source/screens/ADM001';
import { ADM002 } from './source/screens/ADM002';
import { ADM003 } from './source/screens/ADM003';
import { ADM004 } from './source/screens/ADM004';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

const StackNavigator = createStackNavigator({
  ADM001: {
    navigationOptions: {
      header: null,
    },
    screen: ADM001
  },
  ADM002: {    
    navigationOptions: {
      headerTintColor: 'rebeccapurple',
      headerTitleStyle: { color: 'black' }
    },
    screen: ADM002
  },
  ADM003:{
    navigationOptions: {
      headerTintColor: 'rebeccapurple',
      headerTitleStyle: { color: 'black' }
    },
    screen: ADM003
  },
  ADM004:{
    navigationOptions: {
      headerTintColor: 'rebeccapurple',
      headerTitleStyle: { color: 'black' }
    },
    screen: ADM004
  }
})

const AppNavigator = createAppContainer(
  StackNavigator
)

const store = createStore(myAppReducer)

export default App;
