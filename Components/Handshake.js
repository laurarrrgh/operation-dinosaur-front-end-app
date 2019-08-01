import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Handshake extends Component {
  render() {
    return (
      <View>
        <Text>PLEASE OPEN THE ALEXA APP USING 'OPEN DIARY APP'</Text>
        <Text>PLEASE ASK ALEXA TO 'PAIR A DEVICE'</Text>
        <Text>PLEASE READ OUT THE BELOW 4-DIGIT CODE</Text>
        <Text>WAIT FOR ALEXA TO CONFIRM THE DEVICES ARE PAIRED</Text>
        <Text>CONGRATULATIONS! YOU HAVE PAIRED THE FUCK OUT OF ALEXA!</Text>
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
