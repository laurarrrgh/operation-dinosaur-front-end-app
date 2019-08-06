import { Button } from "native-base";
import React from "react";
import { Text } from "react-native";
import styles from "./Styling/styling";

const AddMedsNavigateButton = props => {
  return (
    <Button
      style={styles.medsButtonContainer}
      onPress={() => {
        props.navigation.navigate("AddMeds");
      }}
    >
      <Text>Add More Medication</Text>
    </Button>
  );
};

export default AddMedsNavigateButton;
