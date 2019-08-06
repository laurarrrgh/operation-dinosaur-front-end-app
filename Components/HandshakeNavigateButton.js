import { Button } from "native-base";
import React from "react";
import { Text } from "react-native";
import styles from "./Styling/styling";

const HandshakeNavigateButton = props => {
  return (
    <Button
      style={styles.handshakeButton}
      title="pair alexa"
      onPress={() => {
        props.navigation.navigate("Handshake");
      }}
    >
      <Text>Pair Alexa</Text>
    </Button>
  );
};

export default HandshakeNavigateButton;
