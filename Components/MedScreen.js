import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddMeds from "./AddMeds";
import AddMedsNavigateButton from "./AddMedsNavigateButton";

const addMedsButton = createStackNavigator({
  AddMedsNavigateButton: { screen: AddMedsNavigateButton },
  AddMeds: { screen: AddMeds }
});

const MoreMeds = createAppContainer(addMedsButton);

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
          <View key={med.id}>
            <Text> Medication: {med.type} </Text>
            <Text> Due: {moment(med.due).format("HH:MM")}</Text>
            <Text> Taken: {med.taken ? "true" : "false"}</Text>
          </View>
        ))}
        <MoreMeds style={{ flex: 1 }} />
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
