import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Handshake from "./Handshake";
import HandshakeNavigateButton from "./HandshakeNavigateButton";

const handshakeButton = createStackNavigator({
  HandshakeNavigateButton: { screen: HandshakeNavigateButton },
  Handshake: { screen: Handshake }
});

const Bay = createAppContainer(handshakeButton);

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          flex: 1,
          justifyContent: "center",
          textAlign: "center",
          textAlignVertical: "center"
        }}
      >{`Welcome to ${props.screenProps.user.first_name}'s homepage`}</Text>
      <Bay style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    textAlign: "center",
    color: "chartreuse"
  }
});

export default HomeScreen;
