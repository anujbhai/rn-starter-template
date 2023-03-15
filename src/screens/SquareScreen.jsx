import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const INCREMENT_VALUE = 15;

  const setColor = (color, change) => {
    switch(color) {
      case "red":
        red + change > 255 || red + change < 0
          ? null
          : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      default:
        return;
    }
  };

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
        onIncrease={() => setColor("red", INCREMENT_VALUE)}
        onDecrease={() => setColor("red", -1 * INCREMENT_VALUE)}
        color="Red"
      />

      <ColorCounter
        onIncrease={() => setColor("blue", INCREMENT_VALUE)}
        onDecrease={() => setColor("blue", -1 * INCREMENT_VALUE)}
        color="Blue"
      />

      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", INCREMENT_VALUE)}
        onDecrease={() => setColor("green", -1 * INCREMENT_VALUE)}
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

export default SquareScreen;

