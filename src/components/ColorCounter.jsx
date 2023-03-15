import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View
} from "react-native";

const ColorCounter = props => {
  const {color, onIncrease, onDecrease} = props;

  return (
    <View>
      <Text style={styles.subHeading}>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => onDecrease()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 20
  }
});

export default ColorCounter;

