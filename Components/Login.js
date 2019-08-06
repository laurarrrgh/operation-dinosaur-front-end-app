import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
import styles from "./Styling/styling";

class Login extends Component {
  state = {
    firstName: null,
    user_id: "    Enter your user id number here"
  };

  onPressButton = () => {
    const { user_id } = this.state;
    api.getUser(user_id).then(user => {
      this.setState({ user_id: user.id, firstName: user.first_name });
    });
  };

  render() {
    return (
      <View style={styles.loginMain}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center"
          }}
        >
          Login
        </Text>
        <TextInput
          style={{
            height: 50,
            borderColor: "gray",
            borderWidth: 1,
            marginLeft: 20,
            marginRight: 20
          }}
          onChangeText={user_id => this.setState({ user_id })}
          value={this.state.user_id}
          editable={true}
          onFocus={() => this.setState({ user_id: "" })}
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
        <Text style={{ padding: 10, marginTop: 10 }}>
          Logged in as: {this.state.firstName}
        </Text>
      </View>
    );
  }
}

export default Login;
