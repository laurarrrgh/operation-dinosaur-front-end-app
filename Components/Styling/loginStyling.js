import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  loginMain: { paddingTop: 40, paddingLeft: 20 },
  loginTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  loginTextInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20
  },
  loginButton: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 90,
    marginRight: 90,
    marginTop: 10,
    fontWeight: "bold"
  },
  loginLowerText: { padding: 10, marginTop: 10 }
}));
