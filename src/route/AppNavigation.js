import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Dummy from '../screens/dummy'
import Home from '../screens/Home'
import Mountain from '../screens/Mountain'

const BottomNavigation = createBottomTabNavigator(
  {
    Dummy: Dummy,
    Home: Home
  },
  {

  }
);


const AppNavigator = createStackNavigator({
  Home: {
    screen: BottomNavigation
  },
  Mountain: {
    screen: Mountain
  },
  Dummy: {
    screen: BottomNavigation
  },
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default createAppContainer(AppNavigator);