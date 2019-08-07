import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
import styles from "./Styling/addMedsStyling";

class AddMeds extends Component {
  static navigationOptions = { header: null };

  state = {
    user_id: 1,
    type: "Enter pills here",
    due: "Enter the time the pill is due here"
  };

  onPressButton = () => {
    const { user_id, type, due } = this.state;
    api.postNewMedication(user_id, type, due).then(
      this.setState({
        type: "Enter pills here",
        due: "Enter the time the pill is due here"
      })
    );
  };
  render() {
    return (
      <View style={styles.addMedsMain}>
        <TextInput
          style={styles.addMedsTextInput}
          onChangeText={type => this.setState({ type })}
          value={this.state.type}
          editable={true}
          onFocus={() => this.setState({ type: "" })}
        />
        <TextInput
          style={styles.addMedsTextInput}
          onChangeText={due => this.setState({ due })}
          value={this.state.due}
          editable={true}
          onFocus={() => this.setState({ due: "" })}
        />
        <Button
          style={styles.addMedsButton}
          title="Submit"
          onPress={this.onPressButton}
        >
          <Text>Submit</Text>
        </Button>
        <Text style={{ marginTop: 10 }}>
          If your pill is taken more than once per day, please enter the pill
          and due time for each instance
        </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   addMedsContainer: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     textAlign: "center"
//   }
// });

export default AddMeds;
