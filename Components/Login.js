import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";

class Login extends Component {
  state = {
    user_id: 0,
    firstName: "please enter your first name here",
    surname: "please enter your surname here"
  };

  onPressButton = () => {
    const { firstName, surname } = this.state;
    api.login(firstName, surname).then(({ user }) => {
      this.setState({
        user_id: user.id,
        firstName: "please enter your first name here",
        surname: "please enter your surname here"
      });
    });
  };
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
          editable={true}
          onFocus={() => this.setState({ firstName: "" })}
        />
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={surname => this.setState({ surname })}
          value={this.state.surname}
          editable={true}
          onFocus={() => this.setState({ surname: "" })}
        />
        <Button
          style={{
            justifyContent: "center",
            textAlign: "center"
          }}
          title="Submit"
          onPress={this.onPressButton}
        >
          <Text>Submit</Text>
        </Button>
        <Text>Currently logged in as user: {this.state.user_id}</Text>
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

export default Login;
