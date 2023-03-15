import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const handlePressInc = () => {
    setCount(count + 1);
  };

  const handlePressDec = () => {
    if (count <= 0) {
      return;
    }

    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current count: {count}</Text>

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

export default CounterScreen;

