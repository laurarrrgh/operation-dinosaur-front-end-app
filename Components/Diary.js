import React from "react";
import { Text, View, StyleSheet } from "react-native";
import moment from "moment";

const DiaryScreen = props => (
  <View style={styles.diary}>
    {props.screenProps.details.quiz
      ? props.screenProps.details.quiz.map(
          ({ completed_at, mood, stiffness, slowness, tremor, id }) => {
            return (
              <View key={id}>
                <Text>
                  Taken: {moment(completed_at).format("DD-MM-YYYY HH:MM")}
                </Text>
                <Text>Mood score: {mood}</Text>
                <Text>Stiffness score: {stiffness}</Text>
                <Text>Slowness score: {slowness}</Text>
                <Text>Tremor score: {tremor}</Text>
              </View>
            );
          }
        )
      : null}
  </View>
);

const styles = StyleSheet.create({
  diary: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

export default DiaryScreen;
