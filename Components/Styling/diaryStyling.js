import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  diaryMain: {
    marginTop: 88
  },
  diarySingle: {
    paddingBottom: 20
  },
  diaryTitle: {
    fontSize: 38,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center"
  },
  diaryCard: {
    marginBottom: 10,
    marginHorizontal: 50,
    shadowColor: "#768692",
    shadowOffset: {
      height: 2
    },
    shadowOpacity: 0.9
  },
  diaryText: {
    backgroundColor: "#fff",
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 75
  }
}));
