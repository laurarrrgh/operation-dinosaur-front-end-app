import React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { PieChart, LineChart } from "react-native-chart-kit";
import HeaderBar from "./HeaderBar";


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
    <ScrollView>
      <Text>Meds Taken</Text>
      <PieChart
        data={[
          { name: "Taken", quantity: 3, color: "chartreuse" },
          { name: "Not Taken", quantity: 1, color: "#00FF00" }
        ]}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        accessor="quantity"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <Text>Mood Chart</Text>
      <LineChart
        data={{
          labels: [
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday"
          ],
          datasets: [
            {
              data: moodResults.slice(-7),
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 2
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "chartreuse",
          backgroundGradientFrom: "chartreuse",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
      />

      <Text>Slowness Chart</Text>
      <LineChart
        data={{
          labels: [
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday"
          ],
          datasets: [
            {
              data: slownessResults.slice(-7),
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 2
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "chartreuse",
          backgroundGradientFrom: "chartreuse",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
      />
      <Text>Stiffness Chart</Text>
      <LineChart
        data={{
          labels: [
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday"
          ],
          datasets: [
            {
              data: stiffnessResults.slice(-7),
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 2
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "chartreuse",
          backgroundGradientFrom: "chartreuse",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
      />
      <Text>Tremor Chart</Text>
      <LineChart
        data={{
          labels: [
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday"
          ],
          datasets: [
            {
              data: tremorResults.slice(-7),
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 2
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "chartreuse",
          backgroundGradientFrom: "chartreuse",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  overviewMain: {
    marginTop: 88
  }
});
export default OverviewScreen;
