import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  // Events
  eventsMain: {
    flex: 1,
    padding: 10,
    paddingTop: 100,
    textAlign: "center",
    backgroundColor: "#fff"
  },
  eventsTitle: {
    fontSize: 38,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center"
  },
  eventsSingle: {
    paddingBottom: 20
  },
  eventsText: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    fontSize: 14,
    paddingBottom: 1
  }
}));
