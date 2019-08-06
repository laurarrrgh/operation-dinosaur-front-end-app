import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
// import styles from "./Styling/styling";

class AddMeds extends Component {
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
          style={{
            height: 50,
            borderColor: "gray",
            borderWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 10
          }}
          onChangeText={type => this.setState({ type })}
          value={this.state.type}
          editable={true}
          onFocus={() => this.setState({ type: "" })}
        />
        <TextInput
          style={{
            height: 50,
            borderColor: "gray",
            borderWidth: 1,
            marginLeft: 20,
            marginRight: 20
          }}
          onChangeText={due => this.setState({ due })}
          value={this.state.due}
          editable={true}
          onFocus={() => this.setState({ due: "" })}
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
