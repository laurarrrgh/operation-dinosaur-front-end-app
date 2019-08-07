import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
import styles from "./Styling/signUpStyling";
import HeaderBar from "./HeaderBar";

class SignUp extends Component {
  state = {
    user_id: null,
    firstName: "    Enter your first name",
    surname: "    Enter your surname",
    password: "    Enter your password",
    confirmPassword: "    Confirm your password"
  };

  onPressButton = () => {
    const { firstName, surname } = this.state;
    api
      .signUp(firstName, surname)
      .then(({ user }) => {
        this.setState({
          user_id: user.id,
          firstName: " Enter your first name here",
          surname: "  Enter your surname here",
          password: "    Enter your password",
          confirmPassword: "    Confirm your password"
        });
      })
      .then(() => {
        this.props.screenProps.setUser(this.state.user_id);
      });
  };

  render() {
    return (
      <View>
        <HeaderBar />
        <Text style={styles.signUpTitle}>Sign Up</Text>
        <TextInput
          style={styles.signUpTextInput}
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
          editable={true}
          onFocus={() => this.setState({ firstName: "" })}
        />
        <TextInput
          style={styles.signUpTextInput}
          onChangeText={surname => this.setState({ surname })}
          value={this.state.surname}
          editable={true}
          onFocus={() => this.setState({ surname: "" })}
        />
        <TextInput
          style={styles.signUpTextInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password.toString()}
          editable={true}
          onFocus={() => this.setState({ password: "" })}
        />
        <TextInput
          style={styles.signUpTextInput}
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
          value={this.state.confirmPassword.toString()}
          editable={true}
          onFocus={() => this.setState({ confirmPassword: "" })}
        />
        <Button
          style={styles.signUpButton}
          title="Submit"
          onPress={this.onPressButton}
        >
          <Text>Submit</Text>
        </Button>
        {this.state.user_id ? (
          <Text>Sign up successful! Your user id is: {this.state.user_id}</Text>
        ) : null}
      </View>
    );
  }
}

export default SignUp;
