import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const Home = () => {
  return (
    <View style={myStyles.container}>
      <Text variant="displayLarge">Home Screen</Text>
    </View>
  );
};

export default Home;

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
