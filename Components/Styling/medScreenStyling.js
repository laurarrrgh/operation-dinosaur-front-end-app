import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  medSingle: {
    paddingTop: 20
  },
  medsTitle: {
    fontSize: 38,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center"
  },
  medCard: {
    marginBottom: 5,
    marginHorizontal: 50,
    shadowColor: "#768692",
    shadowOffset: {
      height: 2
    },
    shadowOpacity: 0.9
  },
  medText: {
    backgroundColor: "#fff",
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 15,
    textAlign: "center"
  },
  medsScreenButton: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 90,
    marginRight: 90,
    marginTop: 10,
    fontWeight: "bold"
  }
}));
