import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import api from "../Utils/apiUtils";
import styles from "./Styling/styling";

class Handshake extends Component {
  state = {
    user_id: 1,
    code: null
  };

  componentDidMount() {
    const { user_id } = this.state;
    api.get4DigitNumber(user_id).then(code => {
      this.setState({ code });
    });
  }

  render() {
    return (
      <View style={styles.handshakeContainer}>
        <Text>Open the Alexa App using 'Open Diary App'</Text>
        <Text>Ask Alexa to 'Pair a Device'</Text>
        <Text>Read out the following 4-digit code:</Text>
        <Text>{this.state.code}</Text>
        <Text>Wait for Alexa to confirm the devices are paired</Text>
        <Text>You have paired MediRep to your Alexa!</Text>
      </View>
    );
  }
}

export default Handshake;
