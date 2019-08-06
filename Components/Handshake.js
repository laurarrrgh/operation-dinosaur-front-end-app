import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import api from "../Utils/apiUtils";

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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Instructions For Pairing Alexa:</Text>
        <Text> 1. Say "Open Diary App"</Text>
        <Text> 2. Say "Pair a device"</Text>
        <Text> 3. Read out the below 4-digit code:</Text>
        <Text> {this.state.code}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center"
  }
});
export default Handshake;
