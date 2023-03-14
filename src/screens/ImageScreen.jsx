import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Image Screen</Text>

      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  heading: {
    fontSize: 30
  }
});

export default ImageScreen;

