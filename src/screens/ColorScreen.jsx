import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const handlePressRandomColor = () => {
    setColors([...colors, randomRGB()]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Color screen</Text>

      <Button
        title="Add a color"
        onPress={handlePressRandomColor}
      />

      <FlatList
        keyExtractor={index => index}
        data={colors}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item
              }}
            />
          );
        }}
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

export default ColorScreen;

