import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";

import ColorCounter from "../components/ColorCounter";

const INCREMENT_VALUE = 15;

const reducer = (state, action) => {
  switch(action.type) {
    case "change_red":
      return state.red + action.payload > 255
        || state.red + action.payload < 0
          ? state
          : {...state, red: state.red + action.payload};

    case "change_green":
      return state.green + action.payload > 255
        || state.green + action.payload < 0
          ? state
          : {...state, green: state.green + action.payload};

    case "change_blue":
      return state.blue + action.payload > 255
        || state.blue + action.payload < 0
          ? state
          : {...state, blue: state.blue + action.payload};

    default:
      return;
  }
};

const SquareReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  const {red, green, blue} = state;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Square screen</Text>
      
      <Text>{red} {" "} {blue} {" "} {green}</Text>
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />

      <ColorCounter
        onIncrease={() => dispatch({type: "change_red", payload: INCREMENT_VALUE})}
        onDecrease={() => dispatch({type: "change_red", payload: -1 * INCREMENT_VALUE})}
        color="Red"
      />

      <ColorCounter
        onIncrease={() => dispatch({type: "change_blue", payload: INCREMENT_VALUE})}
        onDecrease={() => dispatch({type: "change_blue", payload: -1 * INCREMENT_VALUE})}
        color="Blue"
      />

      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({type: "change_green", payload: INCREMENT_VALUE})}
        onDecrease={() => dispatch({type: "change_green", payload: -1 * INCREMENT_VALUE})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 15
  },
  heading: {
    fontSize: 45
  }
});

export default SquareReducerScreen;

