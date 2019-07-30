import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './Components/HomeScreen'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {StackNavigator} from 'react-navigation'
import DiaryScreen from './Components/Diary'
import MedScreen from './Components/meds'

const App = createStackNavigator({
  Home:  {screen: HomeScreen},
  DiaryScreen: {screen: DiaryScreen}, 
  MedScreen: {screen: MedScreen}
})

export default createAppContainer(App);
