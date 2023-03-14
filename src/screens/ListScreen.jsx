import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ListScreen = () => {
  const friends = [
    {name: "Friend #1", age: 20},
    {name: "Friend #2", age: 29},
    {name: "Friend #3", age: 21},
    {name: "Friend #4", age: 28},
    {name: "Friend #5", age: 22},
    {name: "Friend #6", age: 27},
    {name: "Friend #7", age: 23},
    {name: "Friend #8", age: 26},
    {name: "Friend #9", age: 24},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        // horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={i => i.name}
        data={friends}
        renderItem={({item}) => {
          return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;

