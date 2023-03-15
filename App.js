// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareReducerScreen from './src/screens/SquareReducerScreen';
import CounterReducerScreen from './src/screens/CounterReducerScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="Images" component={ImageScreen} />
        <Stack.Screen name="Lists" component={ListScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="SquareReducer" component={SquareReducerScreen} />
        <Stack.Screen name="CounterReducer" component={CounterReducerScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

