import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddMeds from "./AddMeds";
import moment from "moment";
import styles from "./Styling/medScreenStyling";
import HeaderBar from "./HeaderBar";
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
      <View>
        <HeaderBar />
        <Text style={styles.medsTitle}>Medication Screen </Text>
        <Button
          style={styles.medsScreenButton}
          title="Go to AddMeds"
          onPress={() => this.props.navigation.push("AddMeds")}
        />
        <ScrollView style={{ paddingTop: 30 }}>
          {meds.map(med => (
            <View key={med.id} style={styles.medCard}>
              <Text style={styles.medText}> Medication: {med.type} </Text>
              <Text style={styles.medText}>
                Due:
                {moment(med.due)
                  .subtract(1, "hour")
                  .format("LT")}
              </Text>
              <Text style={styles.medText}>
                Taken: {med.taken ? "true" : "false"}
              </Text>
              <Button
                style={styles.medsScreenButtonDelete}
                title={med.status === 5 ? "Medication Removed" : "Delete"}
                onPress={() => {
                  med.status === 5 ? null : this.deleteMeds(med.id);
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
