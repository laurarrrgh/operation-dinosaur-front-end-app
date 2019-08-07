import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  medsMain: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  medsTitle: {
    fontSize: 38,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center"
  },
  medSingle: { paddingTop: 20 },
  medCard: {
    borderColor: "orange",
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 10
  },
  medText: {
    backgroundColor: "#fff",
    fontSize: 14,
    paddingBottom: 1,
    textTransform: "capitalize"
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
