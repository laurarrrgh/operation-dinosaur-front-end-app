import React from "react";
import { View, Text } from "react-native";
import styles from "./Styling/styling";

const Header = () => {
  return (
    <Text
      leftComponent={{ text: "logo space" }}
      centerComponent={{ text: "MEDIREP" }}
      //rightComponent={{ icon: "home", style: { color: "#fff" } }}
    />
  );
};

export default Header;
