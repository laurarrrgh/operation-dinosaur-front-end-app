import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddMeds from "./AddMeds";
import moment from "moment";

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
              <Text> Due: {moment(med.due).format("HH:MM")}</Text>
              <Text> Taken: {med.taken ? "true" : "false"}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
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
