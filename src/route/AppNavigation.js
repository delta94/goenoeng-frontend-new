import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator ,createStackNavigator} from 'react-navigation';
import Dummy from '../screens/dummy';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp/Index';

const BottomNavigation = createBottomTabNavigator(
	{
		Dummy: Dummy,
	},
	{
        
    }
);


const AppNavigator = createStackNavigator({
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
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