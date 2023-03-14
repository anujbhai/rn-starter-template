// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="Images" component={ImageScreen} />
        <Stack.Screen name="Lists" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

