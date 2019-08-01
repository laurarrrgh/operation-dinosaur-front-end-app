import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EventsScreen = props => (
  <View style={styles.events}>
    {props.screenProps.events.map(({id, time, description, user_id}) => (
      <View key={id}>
        <Text >{`Time: ${time}`}</Text>
        <Text >{`event: ${description}`}</Text>
      </View>
    ))}
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
