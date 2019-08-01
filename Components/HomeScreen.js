import React from "react";
import { StyleSheet, Text, View } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>{`Welcome to ${
        props.screenProps.user.first_name
      }'s homepage`}</Text>
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
