import React, { Component } from "react";
import { View, Text, styleSheet } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import DiaryScreen from "./Components/Diary";
import MedicationNavigator from "./Components/MedScreen";
import EventsScreen from "./Components/Events";
import OverviewScreen from "./Components/Overview";
import api from "./Utils/apiUtils";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

class App extends Component {
  state = {
    user_id: 1,
    logged_in: false,
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

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.user_id !== prevState.user_id) {
      this.componentDidMount();
    }
  };

  setUser = user_id => {
    this.setState({ user_id: user_id, logged_in: true });
  };

  logout = () => {
    this.setState({ logged_in: false });
  };

  render() {
    const details = this.state;
    const setUser = this.setUser;
    const logout = this.logout;
    return <AppContainer screenProps={{ details, setUser, logout }} />;
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

const NavBar = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Diary: { screen: DiaryScreen },
    Medication: { screen: MedicationNavigator },
    Events: { screen: EventsScreen },
    Overview: { screen: OverviewScreen }
  },
  {
    activeColor: "white",
    color: "black",
    barStyle: { backgroundColor: "orange" }
  }
);
const AppContainer = createAppContainer(NavBar);

export default App;
