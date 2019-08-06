import React, { Component } from "react";
import { Text, View } from "react-native";
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text> Instructions For Pairing Alexa:</Text>
        <Text> 1. Say "Open Diary App"</Text>
        <Text> 2. Say "Pair a device"</Text>
        <Text> 3. Read out the below 4-digit code:</Text>
        <Text> {this.state.code}</Text>
        <Text style={{ textAlign: "center" }}>
          4. If Alexa says "pairing successful", you have successfully paired
          the device and can return to the home screen. Otherwise, please repeat
          steps 1-3.
        </Text>
      </View>
    );
  }
}

export default Handshake;
