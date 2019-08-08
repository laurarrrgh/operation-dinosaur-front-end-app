import React from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { PieChart, LineChart } from "react-native-chart-kit";
import HeaderBar from "./HeaderBar";
import styles from "./Styling/graphsStyling";

const OverviewScreen = props => {
  const { meds } = props.screenProps.details.meds;
  const { quiz } = props.screenProps.details;
  const takenQuantity = meds.filter(({ status }) => status === 10).length;
  const missedQuantity = meds.length - takenQuantity.length;
  // const day = moment(new Date(Date.now())).format("dddd");
  const moodResults = quiz.map(function(quiz) {
    return quiz.mood;
  });
  const slownessResults = quiz.map(function(quiz) {
    return quiz.slowness;
  });
  const stiffnessResults = quiz.map(function(quiz) {
    return quiz.stiffness;
  });
  const tremorResults = quiz.map(function(quiz) {
    return quiz.tremor;
  });

  return (
    <View style={styles.graphMain}>
      <HeaderBar />
      <ScrollView style={styles.graphScrollView}>
        <Text style={styles.graphMainTitle}>Overview</Text>
        <View>
          <Text style={styles.graphTitle}>Meds Taken</Text>
          <PieChart
            data={[
              { name: "Taken", quantity: 3, color: "#005EB8" },
              { name: "Missed", quantity: 1, color: "#FAE100" }
            ]}
            width={Dimensions.get("window").width}
            height={200}
            chartConfig={{
              backgroundColor: "#005EB8",
              decimalPlaces: 2,
              color: () => `white`,
              style: {
                borderRadius: 16
              }
            }}
            accessor="quantity"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
        <View>
          <Text style={styles.graphTitle}>Mood Results</Text>
          <LineChart
            data={{
              labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
              datasets: [
                {
                  data: moodResults.slice(-7),
                  color: () => `#003087`,
                  strokeWidth: 2
                }
              ]
            }}
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={{
              backgroundColor: "#E8EDEE",
              backgroundGradientFrom: "#FAE100",
              backgroundGradientTo: "#005EB8",
              decimalPlaces: 2,
              color: () => `white`,
              style: {
                borderRadius: 26
              }
            }}
          />
        </View>
        <View>
          <Text style={styles.graphTitle}>Slowness Results</Text>
          <LineChart
            data={{
              labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
              datasets: [
                {
                  data: slownessResults.slice(-7),
                  color: () => `#003087`,
                  strokeWidth: 2
                }
              ]
            }}
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={{
              backgroundColor: "#E8EDEE",
              backgroundGradientFrom: "#FAE100",
              backgroundGradientTo: "#005EB8",
              decimalPlaces: 2,
              color: () => `white`,
              style: {
                borderRadius: 16
              }
            }}
          />
        </View>
        <View>
          <Text style={styles.graphTitle}>Stiffness Results</Text>
          <LineChart
            data={{
              labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
              datasets: [
                {
                  data: stiffnessResults.slice(-7),
                  color: () => `#003087`,
                  strokeWidth: 2
                }
              ]
            }}
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={{
              backgroundColor: "#E8EDEE",
              backgroundGradientFrom: "#FAE100",
              backgroundGradientTo: "#005EB8",
              decimalPlaces: 2,
              color: () => `white`,
              style: {
                borderRadius: 16
              }
            }}
          />
        </View>
        <View>
          <Text style={styles.graphTitle}>Tremor Results</Text>
          <LineChart
            data={{
              labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
              datasets: [
                {
                  data: tremorResults.slice(-7),
                  color: () => `#003087`,
                  strokeWidth: 2
                }
              ]
            }}
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={{
              backgroundColor: "#E8EDEE",
              backgroundGradientFrom: "#FAE100",
              backgroundGradientTo: "#005EB8",
              decimalPlaces: 2,
              color: () => `white`,
              style: {
                borderRadius: 16
              }
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OverviewScreen;
