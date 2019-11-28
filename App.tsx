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
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import { ADM001 } from './source/screens/ADM001';

const App = () => {
  return (
    <AppNavigator />
  );
};

const StackNavigator = createStackNavigator({
  ADM001: {
      navigationOptions: {
          header: null,
      },
      screen: ADM001
  },  
})

const AppNavigator = createAppContainer(
  StackNavigator
)

export default App;
