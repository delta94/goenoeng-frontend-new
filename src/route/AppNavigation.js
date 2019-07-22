import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator ,createStackNavigator} from 'react-navigation';
import Dummy from '../screens/dummy'

const BottomNavigation = createBottomTabNavigator(
	{
		Dummy: Dummy,
	},
	{
        
    }
);


const AppNavigator = createStackNavigator({
    Dummy: {
      screen: BottomNavigation
    }
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

  export default createAppContainer(AppNavigator);