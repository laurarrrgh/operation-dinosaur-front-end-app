import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  signupMain: {
    paddingTop: 50,
    paddingLeft: 20
  },
  signUpTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center"
  },
  signUpTextInput: {
    height: 50,
    borderColor: "gray",
    textAlign: "center",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1.5
  },
  signUpButton: {
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 90,
    marginTop: 10,
    fontWeight: "bold"
  },
  signUpText: {
    padding: 10,
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
}));
