import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import moment from "moment";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddMeds from "./AddMeds";
import AddMedsNavigateButton from "./AddMedsNavigateButton";
import { Col, Row, Grid } from "react-native-easy-grid";
// import DelMedsNavigationButton from "./DelMedsNavigationButton"
// import delMedsButton from "./delMedsButton"

const addMedsButton = createStackNavigator({
  AddMedsNavigateButton: { screen: AddMedsNavigateButton },
  AddMeds: { screen: AddMeds }
});

// const delMedsButton = createStackNavigator({
//   DelMedsNavigationButton: { screen: DelMedsNavigationButton },
//   DelMeds: { screen: DelMeds }
// });

const MoreMeds = createAppContainer(addMedsButton);
// const RemoveMeds = createAppContainer(delMedsButton)

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
      <Grid>
        <Row size={45}>
          <MoreMeds />
        </Row>
        <Row size={55}>
          <ScrollView>
            {meds.map(med => (
              <View key={med.id}>
                <Text> Medication: {med.type} </Text>
                <Text> Due: {moment(med.due).format("HH:MM")}</Text>
                <Text> Taken: {med.taken ? "true" : "false"}</Text>
              </View>
            ))}
          </ScrollView>
        </Row>
      </Grid>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center"
  }
});
