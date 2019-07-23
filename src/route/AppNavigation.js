import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator ,createStackNavigator} from 'react-navigation';
import Dummy from '../screens/dummy'
import MountainDetail from '../screens/MountainDetail'
import BookingMountain from '../screens/BookingMountain'
import Chat from '../screens/Chat'

const BottomNavigation = createBottomTabNavigator(
	{
    Dummy: Dummy,
    MountainDetail:MountainDetail,
    BookingMountain:BookingMountain,
	  Chat:Chat
	},
	{
        
    }
);


const AppNavigator = createStackNavigator(
  {
    Dummy: {
      screen: BottomNavigation
    },
    MountainDetail: {
      screen: BottomNavigation
    },
    BookingMountain:{
      screen: BottomNavigation
    },
    Chat:{
      screen: BottomNavigation
    }
  }, 
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

export default createAppContainer(AppNavigator);