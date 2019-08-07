import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  addMedsMain: { paddingTop: 50, paddingLeft: 20 },
  addMedsTextInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  addMedsButton: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 90,
    marginRight: 90,
    marginTop: 10,
    fontWeight: "bold"
  }
}));
