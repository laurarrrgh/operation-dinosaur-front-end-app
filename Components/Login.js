import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
import styles from "./Styling/loginStyling";
import HeaderBar from "./HeaderBar";
import { ScrollView } from "react-native-gesture-handler";

class Login extends Component {
  state = {
    firstName: null,
    user_id: "Enter your user id number",
    password: "Enter your password"
  };

  onPressButton = () => {
    const { user_id } = this.state;
    api
      .getUser(user_id)
      .then(user => {
        this.setState({ user_id: user.id, firstName: user.first_name });
      })
      .then(() => {
        this.props.screenProps.setUser(this.state.user_id);
      });
  };

  render() {
    return (
      <View>
        <HeaderBar />
        <ScrollView>
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.loginText}>User ID Number</Text>
          <TextInput
            style={styles.loginTextInput}
            onChangeText={user_id => this.setState({ user_id })}
            value={this.state.user_id.toString()}
            editable={true}
            onFocus={() => this.setState({ user_id: "" })}
          />
          <Text style={styles.loginText}>Password</Text>
          <TextInput
            style={styles.loginTextInput}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            value={this.state.password.toString()}
            editable={true}
            onFocus={() => this.setState({ password: "" })}
          />
          <Button
            style={styles.loginButton}
            title="Submit"
            onPress={this.onPressButton}
          >
            <Text>Submit</Text>
          </Button>
          <Text style={styles.loginText}>
            Logged in as: {this.state.firstName}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
