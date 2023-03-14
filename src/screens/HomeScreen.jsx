import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity
} from "react-native";

const HomeScreen = props => {
  const {navigation} = props;

  const name = "Anuj";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting started with React Native</Text> 
      <Text style={styles.subText}>My name is {name}</Text> 

      <Button
        title="Go to components"
        onPress={() => navigation.navigate("Components")}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Lists")}
      >
        <Text style={styles.styledBtn}>Go to lists</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  text: {
    fontSize: 45
  },
  subText: {
    fontSize: 20,
    marginBottom: 30
  },
  styledBtn: {
    textAlign: "center",
    paddingVertical: 30,
  }
});

export default HomeScreen;

