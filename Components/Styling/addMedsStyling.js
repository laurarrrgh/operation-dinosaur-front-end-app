import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  addMedsMain: { paddingTop: 50, paddingLeft: 20 },
  addMedsTextInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1.5
  },
  addMedsButton: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 120,
    marginRight: 120,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 50,
    borderRadius: 15,
    borderWidth: 1.5
  }
}));
