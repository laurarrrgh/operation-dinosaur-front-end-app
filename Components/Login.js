import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";

class Login extends Component {
  state = {
    firstName: null,
    user_id: "please enter your user id number here"
  };

  onPressButton = () => {
    const { user_id } = this.state;
    api
      .getUser(user_id)
      .then(user => {
        this.setState({ user_id: user.id, firstName: user.first_name });
      })
      .then(user => {
        this.props.screenProps.setUser(this.state.user_id);
      });
  };

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={user_id => this.setState({ user_id })}
          value={this.state.user_id.toString()}
          editable={true}
          onFocus={() => this.setState({ user_id: "" })}
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
        <Text>Logged in as: {this.state.firstName}</Text>
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
