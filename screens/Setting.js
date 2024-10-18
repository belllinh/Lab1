import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const Settings = () => {
  return (
    <View style={myStyles.container}>
      <Text variant="displayLarge">Settings Screen</Text>
    </View>
  );
};

export default Settings;

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
