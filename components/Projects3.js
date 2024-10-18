import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Button = ({ text, onPress, buttonStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const Projects3 = () => (
  <View style={styles.container}>
    <Button text="Say hello" onPress={() => alert("hello!")} />
    <Button
      text="Say goodbye"
      onPress={() => alert("goodbye!")}
      buttonStyle={{ backgroundColor: "#4dc2c2" }} 
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ff637c", 
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  text: {
    color: "#fff",
  },
});

export default Projects3;
