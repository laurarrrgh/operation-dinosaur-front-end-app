import React, { Component } from "react";
import { View, Text } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { StackNavigator } from "react-navigation";
import DiaryScreen from "./Components/Diary";
import MedScreen from "./Components/MedScreen";
import EventsScreen from "./Components/Events";
import OverviewScreen from "./Components/Overview";

class App extends Component {
  state = {
    beans: "legumes"
  };

  componentDidMount() {}

  render() {
    const NavBar = createBottomTabNavigator({
      Home: { screen: HomeScreen },
      DiaryScreen: { screen: DiaryScreen },
      MedScreen: { screen: MedScreen },
      EventsScreen: { screen: EventsScreen },
      OverviewScreen: { screen: OverviewScreen }
    });
    const AppContainer = createAppContainer(NavBar);
    return <AppContainer screenProps={{ beans: this.state.beans }} />;
  }
}

export default App;
