import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  eventsMain: {
    marginTop: 88
  },
  eventsSingle: {
    paddingBottom: 20
  },
  eventsTitle: {
    fontSize: 38,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center"
  },
  eventCard: {
    marginBottom: 5,
    marginHorizontal: 50,
    shadowColor: "#768692",
    shadowOffset: {
      height: 2
    },
    shadowOpacity: 0.9
  },
  eventsText: {
    backgroundColor: "#fff",
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 15,
    textAlign: "center"
  }
}));
