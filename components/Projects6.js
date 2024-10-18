import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: { 
    backgroundColor: "#fff", 
    flex: 1 // Added flex to allow ScrollView to take full height
  },
  box: {
    width: 100,
    height: 100, // Fixed typo: `height100` to `height: 100`
    justifyContent: "center", // Fixed property: `justifyItems` to `justifyContent`
    alignItems: "center", // Added alignItems to center text
    margin: 20,
  },
});

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Add 'Project 6' squares to the data
const project6Data = [...data, "Project 6"];

export default () => {
  return (
    <ScrollView style={styles.container}>
      {project6Data.map((item, index) => (
        <Square key={index} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
};
