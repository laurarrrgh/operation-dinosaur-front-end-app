import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  loginMain: { paddingTop: 40, paddingLeft: 20 },
  loginTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20
  },
  loginTextInput: {
    height: 50,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1.5,
    paddingHorizontal: 2
  },
  loginButton: {
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 90,
    marginTop: 10,
    fontWeight: "bold"
  },
  loginText: {
    padding: 10,
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
}));
