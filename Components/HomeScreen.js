import React from "react";
import { StyleSheet, Text, View } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to homepage`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center"
  }
});

export default HomeScreen;
