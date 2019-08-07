import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  diaryMain: {
    flex: 1,
    padding: 45,
    paddingTop: 100,
    backgroundColor: "#fff"
  },
  diarySingle: {
    paddingBottom: 20
  },
  diaryTitle: {
    fontSize: 38,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center"
  },
  diaryCard: {
    borderColor: "orange",
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 15
  },
  diaryText: {
    backgroundColor: "#fff",
    fontSize: 14,
    paddingBottom: 1
  }
}));
