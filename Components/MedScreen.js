import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddMeds from "./AddMeds";
import moment from "moment";
import styles from "./Styling/styling";

class MedsContainer extends React.Component {
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
      <View style={styles.medsMain}>
        <Text style={styles.medsTitle}>Medication Screen </Text>
        <Button
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginLeft: 90,
            marginRight: 90,
            marginTop: 10,
            fontWeight: "bold"
          }}
          title="Go to AddMeds"
          onPress={() => this.props.navigation.push("AddMeds")}
        />
        <ScrollView>
          {meds.map(med => (
            <View key={med.id} style={styles.medSingle}>
              <Text style={styles.medText}> Medication: {med.type} </Text>
              <Text style={styles.medText}>
                {" "}
                Due: {moment(med.due).format("HH:MM")}
              </Text>
              <Text style={styles.medText}>
                {" "}
                Taken: {med.taken ? "true" : "false"}
              </Text>
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
