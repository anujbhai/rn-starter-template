import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the components screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    fontSize: 45
  },
});

export default ComponentsScreen;

