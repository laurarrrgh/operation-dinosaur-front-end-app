import React, { Component } from "react";
import { View, Text, styleSheet } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { StackNavigator } from "react-navigation";
import DiaryScreen from "./Components/Diary";
import MedScreen from "./Components/MedScreen";
import EventsScreen from "./Components/Events";
import OverviewScreen from "./Components/Overview";
import api from "./Utils/apiUtils";

class App extends Component {
  state = {
    user_id: 1,
    user: {},
    events: [],
    quiz: {},
    meds: []
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
      DiaryScreen: { screen: DiaryScreen },
      MedScreen: { screen: MedScreen },
      EventsScreen: { screen: EventsScreen },
      OverviewScreen: { screen: OverviewScreen }
    });
    const AppContainer = createAppContainer(NavBar);
    const details = this.state;
    return <AppContainer screenProps={details} />;
  }
}

export default App;
