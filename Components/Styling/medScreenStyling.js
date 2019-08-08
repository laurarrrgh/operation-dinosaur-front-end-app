import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  medsMain: {
    paddingBottom: 200
  },
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
    textAlign: "center",
    textTransform: "capitalize"
  },
  medsScreenButton: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 90,
    marginRight: 90,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold"
  },
  medsScreenButtonDelete: {
    justifyContent: "flex-end",
    textAlign: "center",
    marginLeft: 90,
    marginRight: 90,
    marginTop: 1,
    marginBottom: 15,
    fontWeight: "bold"
  }
}));
