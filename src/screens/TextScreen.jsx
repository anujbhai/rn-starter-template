import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  const handleChangeText = newValue => {
    setPassword(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter password:</Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={handleChangeText}
      />

      {password.length < 6
        ? <Text style={styles.errorText}>Password must be more than 6 characters.</Text>
        : null}
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  heading: {
    fontSize: 45
  },
  input: {
    marginVertical: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  errorText: {
    fontSize: 20,
    color: "tomato",
  },
});

export default TextScreen;

