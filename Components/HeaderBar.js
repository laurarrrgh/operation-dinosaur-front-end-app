import React from "react";
import { Text, View, Header } from "react-native";
import styles from "./Styling/styling";

const HeaderBar = () => {
  return (
    <View
      style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: "#005EB8" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            textAlign: "right",
            fontSize: 35,
            fontWeight: "bold",
            color: "white"
          }}
        >
          {" "}
          MEDIREP
        </Text>
        <Text style={{ flex: 1 }} />
        <Text
          style={{
            flex: 1,
            textAlign: "right"
          }}
        />
      </View>
    </View>
  );
};

export default HeaderBar;
