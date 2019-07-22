import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import MountainDetail from './MountainDetail';

const AppStackNavigator = createStackNavigator({
  MountainDetail: {
    screen: MountainDetail,
  },
});

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer