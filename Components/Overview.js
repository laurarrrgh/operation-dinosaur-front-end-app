import React from "react";
import { Text, View, StyleSheet } from "react-native";
import HeaderBar from "./HeaderBar";

const OverviewScreen = props => {
  return (
    <View style={styles.overviewMain}>
      <HeaderBar />
      <Text>Overview. Coooool.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overviewMain: {
    marginTop: 88
  }
});
export default OverviewScreen;
