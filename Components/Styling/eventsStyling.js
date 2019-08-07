import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  // Events
  eventsMain: {
    flex: 1,
    padding: 45,
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
  eventCard: {
    borderColor: "orange",
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 10
  },
  eventsText: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    fontSize: 14,
    paddingBottom: 1,
    textTransform: "capitalize"
  }
}));
