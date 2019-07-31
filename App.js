import React, { Component } from "react";
import { View, Text } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { StackNavigator } from "react-navigation";
import DiaryScreen from "./Components/Diary";
import MedScreen from "./Components/MedScreen";
import EventsScreen from "./Components/Events";
import OverviewScreen from "./Components/Overview";

const App = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  DiaryScreen: { screen: DiaryScreen },
  MedScreen: { screen: MedScreen },
  EventsScreen: { screen: EventsScreen },
  OverviewScreen: { screen: OverviewScreen }
});

export default createAppContainer(App);
