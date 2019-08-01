import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class MedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meds: []
    };
  }
  componentDidMount() {
    this.setState(this.props.screenProps.meds);
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
