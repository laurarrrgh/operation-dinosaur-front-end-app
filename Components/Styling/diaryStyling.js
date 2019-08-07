import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  diaryMain: {
    flex: 1,
    padding: 30,
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
  diaryText: {
    backgroundColor: "#fff",
    fontSize: 14,
    paddingBottom: 1
  }
}));
