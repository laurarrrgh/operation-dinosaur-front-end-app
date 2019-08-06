import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Handshake from "./Handshake";
import HandshakeNavigateButton from "./HandshakeNavigateButton";
import Header from "./Header";

const handshakeButton = createStackNavigator({
  HandshakeNavigateButton: { screen: HandshakeNavigateButton },
  Handshake: { screen: Handshake }
});

const HandShake = createAppContainer(handshakeButton);

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.welcomeMessage}>{`Welcome to ${
        props.screenProps.user.first_name
      }'s homepage`}</Text>
      <HandShake style={{ flex: 1 }} />
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
  },
  welcomeMessage: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center"
  }
});

export default HomeScreen;
