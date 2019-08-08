import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
import styles from "./Styling/formStyling";
import HeaderBar from "./HeaderBar";
import { ScrollView } from "react-native-gesture-handler";

class SignUp extends Component {
  state = {
    user_id: null,
    firstName: "Enter your first name",
    surname: "Enter your surname",
    password: "Enter your password",
    confirmPassword: "Confirm your password"
  };

  onPressButton = () => {
    const { firstName, surname } = this.state;
    api
      .signUp(firstName, surname)
      .then(({ user }) => {
        this.setState({
          user_id: user.id,
          firstName: "Enter your first name here",
          surname: "Enter your surname here",
          password: "Enter your password",
          confirmPassword: "Confirm your password"
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
        <ScrollView>
          <Text style={styles.formTitle}>Sign Up</Text>
          <Text style={styles.formText}>First Name:</Text>
          <TextInput
            style={styles.formTextInput}
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}
            editable={true}
            onFocus={() => this.setState({ firstName: "" })}
          />
          <Text style={styles.formText}>Surname:</Text>
          <TextInput
            style={styles.formTextInput}
            onChangeText={surname => this.setState({ surname })}
            value={this.state.surname}
            editable={true}
            onFocus={() => this.setState({ surname: "" })}
          />
          <Text style={styles.formText}>Password</Text>
          <TextInput
            style={styles.formTextInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password.toString()}
            secureTextEntry={true}
            editable={true}
            onFocus={() => this.setState({ password: "" })}
          />
          <Text style={styles.formText}>Confirm Password</Text>
          <TextInput
            style={styles.formTextInput}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword.toString()}
            secureTextEntry={true}
            editable={true}
            onFocus={() => this.setState({ confirmPassword: "" })}
          />
          <Button
            style={styles.formButton}
            title="Submit"
            onPress={this.onPressButton}
          >
            <Text>Submit</Text>
          </Button>
          {this.state.user_id ? (
            <Text>
              Sign up successful! Your user id is: {this.state.user_id}
            </Text>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;
