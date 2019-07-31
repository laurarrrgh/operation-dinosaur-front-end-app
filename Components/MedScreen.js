import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import api from "../Utils/apiUtils";

export default class MedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meds: []
    };
  }
  componentDidMount() {
    api.getMeds(1).then(({ meds }) => this.setState({ meds }));
  }

  render() {
    const { meds } = this.state;
    return (
      <View style={styles.container}>
        {meds.map(med => (
          <Text key={med.type}> {med.type} </Text>
        ))}
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
