import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8EDEE"
  },
  welcomeTitle: {
    paddingBottom: 50,
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "flex-start",
    margin: 50,
    textAlign: "center"
  }
}));
