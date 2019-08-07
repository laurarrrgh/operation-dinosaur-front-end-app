import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddMeds from "./AddMeds";
import moment from "moment";
import styles from "./Styling/medScreenStyling";
import HeaderBar from "./HeaderBar";

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
        <ScrollView>
          {meds.map(med => (
            <View key={med.id} style={styles.medSingle}>
              <View style={styles.medCard}>
                <Text style={styles.medText}> Medication: {med.type} </Text>
                <Text style={styles.medText}>
                  {" "}
                  Due:{" "}
                  {moment(med.due)
                    .subtract(1, "hour")
                    .format("LT")}
                </Text>
                <Text style={styles.medText}>
                  Taken: {med.taken ? "true" : "false"}
                </Text>
              </View>
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
