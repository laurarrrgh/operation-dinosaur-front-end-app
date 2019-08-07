import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddMeds from "./AddMeds";
import moment from "moment";
import api from "../Utils/apiUtils";

class MedsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meds: []
    };
  }

  componentDidMount() {
    this.setState(this.props.screenProps.details.meds);
  }

  render() {
    const { meds } = this.state;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Medication Screen </Text>
        <Button
          title="Go to AddMeds"
          onPress={() => this.props.navigation.push("AddMeds")}
        />
        <ScrollView>
          {meds.map(med => (
            <View key={med.id}>
              <Text> Medication: {med.type} </Text>
              <Text>
                {" "}
                Due:{" "}
                {moment(med.due)
                  .subtract(1, "hour")
                  .format("LT")}
              </Text>
              <Text> Taken: {med.taken ? "true" : "false"}</Text>
              <Button
                title={
                  med.status === 5
                    ? "Medication Removed"
                    : "ADD NICE ICON HERE, LAURA"
                }
                onPress={() => {
                  this.deleteMeds(med.id);
                }}
                color={med.status === 5 ? "red" : "blue"}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  deleteMeds = id => {
    api.patchMedication(id).then(
      this.setState(() => {
        const { meds, ...rest } = this.state;
        let medToChange = {};
        meds.forEach(med => {
          if (med.id === id) {
            medToChange = med;
          }
        });
        medToChange.status = 5;
        return { meds, ...rest };
      })
    );
  };
}

const AppNavigator = createStackNavigator(
  {
    Medications: MedsContainer,
    AddMeds: AddMeds
  },
  {
    initialRouteName: "Medications"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class MedsScreen extends React.Component {
  render() {
    const details = this.props.screenProps;
    return <AppContainer screenProps={details} />;
  }
}
