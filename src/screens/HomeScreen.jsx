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

      <Button
        title="Go to images"
        onPress={() => navigation.navigate("Images")}
      />

      <Button
        title="Go to counter"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="Go to colors"
        onPress={() => navigation.navigate("Color")}
      />

      <Button
        title="Go to squares"
        onPress={() => navigation.navigate("Square")}
      />

      <Button
        title="Go to squares reducer"
        onPress={() => navigation.navigate("SquareReducer")}
      />

      <Button
        title="Go to counter reducer"
        onPress={() => navigation.navigate("CounterReducer")}
      />

      <Button
        title="Go to text screen"
        onPress={() => navigation.navigate("Text")}
      />

      <Button
        title="Go to box screen"
        onPress={() => navigation.navigate("Box")}
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
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-around",
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

