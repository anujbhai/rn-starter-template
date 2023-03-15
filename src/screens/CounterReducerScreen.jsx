import React, { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return {...state, count: state.count + action.payload}

    case "decrement":
      return state.count - action.payload < 0
        ? state
        : {...state, count: state.count - action.payload}

    default:
      return state;
  }
};

const CounterReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  const handlePressInc = () => {
    dispatch({type: "increment", payload: 1});
  };

  const handlePressDec = () => {
    dispatch({type: "decrement", payload: 1});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current count: {state.count}</Text>

      <Button
        title="+"
        onPress={handlePressInc}
      />

      <Button
        title="-"
        onPress={handlePressDec}
      />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  heading: {
    fontSize: 45
  }
});

export default CounterReducerScreen;

