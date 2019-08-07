import React from "react";
import { Text, View, Header } from "react-native";
import styles from "./Styling/styling";

const HeaderBar = () => {
  return (
    <Header
      statusBarProps={{ barStyle: "light-content" }}
      barStyle="light-content" // or directly
      leftComponent={{ text: "logo" }}
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      containerStyle={{
        backgroundColor: "#3D6DCC",
        justifyContent: "space-around"
      }}
    />
  );
};

export default HeaderBar;

//style={{
// flex: 1,
// flexDirection: "row",
// justifyContent: "flex-start",
// backgroundColor: "blue"
// alignItems: "stretch",
// position: "absolute"
// }}

// leftComponent={{ text: "logo space" }}
// centerComponent={{ text: "MEDIREP" }}
// rightComponent={{ icon: "home", style: { color: "#fff" } }}
