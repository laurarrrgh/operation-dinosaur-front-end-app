import { Button } from "native-base";
import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

const AddMedsNavigateButton = props => {
  return (
    <Button
      style={styles.container}
      onPress={() => {
        props.navigation.navigate("AddMeds");
      }}
    >
      <Text>Add More Medication</Text>
    </Button>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center"
  }
});

export default AddMedsNavigateButton;
