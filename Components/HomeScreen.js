import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Handshake from "./Handshake";
import SignUp from "./SignUp";
import Login from "./Login";

class HomeContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>{`Welcome to ${
          this.props.screenProps.user.first_name
        }'s homepage`}</Text> */}
        <Text>Hello, welcome to MEDIREP!</Text>

        <Button
          title="Login"
          onPress={() => this.props.navigation.push("Login")}
        />

        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.push("SignUp")}
        />

        <Button
          title="Pair Alexa"
          onPress={() => this.props.navigation.push("Handshake")}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeContainer,
    Login: Login,
    SignUp: SignUp,
    Handshake: Handshake
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class HomeScreen extends React.Component {
  render() {
    const details = this.props.screenProps;
    return <AppContainer screenProps={details} />;
  }
}
