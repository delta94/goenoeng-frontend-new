import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator ,createStackNavigator} from 'react-navigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp/Index';
import Gateway from '../screens/Payment/Gateway';
import Receipt from '../screens/Payment/Receipt';
import Store from '../Screens/Store';
import DetailProduct from '../Screens/DetailProduct';
import Maps from '../Screens/Maps';

const BottomNavigation = createBottomTabNavigator(
	{
    Store: Store,
    Receipt: Receipt,
    Maps: Maps,
	},
	{
       
    }
);


const AppNavigator = createStackNavigator({
  Store: {
    screen: BottomNavigation
  }, 
    DetailProduct: {
      screen: DetailProduct
    },
    Maps: {
      screen: Maps
    },
    Dummy: {
      screen: BottomNavigation
    },
    Gateway: {
      screen: Gateway
    },
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

  export default createAppContainer(AppNavigator);