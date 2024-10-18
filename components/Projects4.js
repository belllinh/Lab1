import React, { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default () => {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Button
        title={`Pressed ${pressCount} time(s)`}
        onPress={() => setPressCount(pressCount + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
  },
});
