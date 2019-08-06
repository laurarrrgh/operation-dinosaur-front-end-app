import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
import styles from "./Styling/styling";

class SignUp extends Component {
  state = {
    user_id: null,
    firstName: "    Enter your first name here",
    surname: "    Enter your surname here"
  };

  onPressButton = () => {
    const { firstName, surname } = this.state;
    api.signUp(firstName, surname).then(({ user }) => {
      this.setState({
        user_id: user.id,
        firstName: "    Enter your first name here",
        surname: "    Enter your surname here"
      });
    });
  };
  render() {
    return (
      <View style={styles.signupMain}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center"
          }}
        >
          Sign Up
        </Text>
        <TextInput
          style={{
            marginTop: 20,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginRight: 20,
            marginLeft: 20
          }}
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
          editable={true}
          onFocus={() => this.setState({ firstName: "" })}
        />
        <TextInput
          style={{
            marginTop: 20,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginRight: 20,
            marginLeft: 20
          }}
          onChangeText={surname => this.setState({ surname })}
          value={this.state.surname}
          editable={true}
          onFocus={() => this.setState({ surname: "" })}
        />
        <Button
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginLeft: 90,
            marginRight: 90,
            marginTop: 10,
            fontWeight: "bold"
          }}
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
