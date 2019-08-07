import React from "react";
import { Text, View, ScrollView } from "react-native";
import moment from "moment";
import styles from "./Styling/eventsStyling";

const EventsScreen = props => (
  <View style={styles.eventsMain}>
    <Text style={styles.eventsTitle}>Events</Text>
    <ScrollView>
      {props.screenProps.events.map(({ id, time, description, user_id }) => (
        <View key={id} style={styles.eventsSingle}>
          <Text style={styles.eventsText}>{`Time: ${moment(time).format(
            "DD-MM-YYYY HH:MM"
          )}`}</Text>
          <Text style={styles.eventsText}>{`Event: ${description}`}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default EventsScreen;
