import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Handshake from "./Handshake";
import HandshakeNavigateButton from "./HandshakeNavigateButton";
import Header from "./Header";
import styles from "./Styling/styling";

const handshakeButton = createStackNavigator({
  HandshakeNavigateButton: { screen: HandshakeNavigateButton },
  Handshake: { screen: Handshake }
});

const HandShake = createAppContainer(handshakeButton);

function HomeScreen(props) {
  return (
    <View style={styles.homepageContainer}>
      <Header />
      <Text style={styles.welcomeMessage}>{`Welcome to ${
        props.screenProps.user.first_name
      }'s homepage`}</Text>
      <HandShake style={{ flex: 1 }} />
    </View>
  );
}

export default HomeScreen;
