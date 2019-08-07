import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  signupMain: { paddingTop: 50, paddingLeft: 20 },
  signUpTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  signUpTextInput: {
    marginTop: 20,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20
  },
  signUpButton: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 90,
    marginRight: 90,
    marginTop: 10,
    fontWeight: "bold"
  }
}));
