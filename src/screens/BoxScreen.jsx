import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Child #1</Text>

      <Text style={
        [
          styles.textStyle,
          styles.growStyle6,
          styles.selfStyle,
          styles.absoluteFill,
        ]
      }>Child #2</Text>
      
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    // flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    margin: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  textStyle: {
    backgroundColor: "#DFDFDF",
    padding: 15,
    marginVertical: 7,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "#FF0000",
    flex: 2,
    zIndex: 1,
  },
  growStyle6: {
    flex: 6,
  },
  selfStyle: {
    alignSelf: "stretch",
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    backgroundColor: "#66CDAA",
  },
});

export default BoxScreen;

