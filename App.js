import React, { Component } from "react";
import { View, Text, styleSheet } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import DiaryScreen from "./Components/Diary";
import MedScreen from "./Components/MedScreen";
import EventsScreen from "./Components/Events";
import OverviewScreen from "./Components/Overview";
import api from "./Utils/apiUtils";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

class App extends Component {
  state = {
    user_id: 1,
    user: {},
    events: [],
    quiz: {},
    meds: [],
    token: null,
    notification: null
  };

  componentDidMount() {
    const { user_id } = this.state;
    api.getUser(user_id).then(user => {
      this.setState({ user });
    });
    api.getEvents(user_id).then(events => {
      this.setState({ events });
    });
    api.getQuiz(user_id).then(quiz => {
      this.setState({ quiz });
    });
    api.getMeds(user_id).then(meds => {
      this.setState({ meds });
    });
  }

  render() {
    const NavBar = createBottomTabNavigator({
      Home: { screen: HomeScreen },
      Diary: { screen: DiaryScreen },
      Medication: { screen: MedScreen },
      Events: { screen: EventsScreen },
      Overview: { screen: OverviewScreen }
    });
    const AppContainer = createAppContainer(NavBar);
    const details = this.state;
    return <AppContainer screenProps={details} />;
  }

  async registerPush() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== "granted") {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        return;
      }
    }
    const token = await Notifications.getExpoPushTokenAsync();
    this.subscription = Notifications.addListener(this.handleNotification);
    this.setState({ token });
  }

  handleNotification = notification => {
    this.setState({ notification });
  };

  componentWillMount() {
    this.registerPush();
  }
}

export default App;
