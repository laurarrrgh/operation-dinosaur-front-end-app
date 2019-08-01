import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EventsScreen = params => (
  <View style={styles.events}>
    <Text>{JSON.stringify(params.screenProps.events)}</Text>
  </View>
);

const styles = StyleSheet.create({
  events: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

export default EventsScreen;
