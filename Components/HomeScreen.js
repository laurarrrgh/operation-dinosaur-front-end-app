import React from "react";
import { View, Text, Button, Header } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Handshake from "./Handshake";
import SignUp from "./SignUp";
import Login from "./Login";
// import Icon from "react-native-vector-icons/Ionicons";
import styles from "./Styling/homeScreenStyling";

class HomeContainer extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.homeScreen}>
        {/* <Text>{`Welcome to ${
          this.props.screenProps.user.first_name
        }'s homepage`}</Text> */}
        <Text style={styles.welcomeTitle}>Hello, Welcome to MEDIREP!</Text>

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
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class HomeScreen extends React.Component {
  render() {
    const details = this.props.screenProps;
    return <AppContainer screenProps={details} />;
  }
}
