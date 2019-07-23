import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator ,createStackNavigator} from 'react-navigation';
import Dummy from '../screens/dummy';
import Store from '../Screens/Store';
import DetailProduct from '../Screens/DetailProduct';
import Maps from '../Screens/Maps';

const BottomNavigation = createBottomTabNavigator(
	{
    Store: Store,
    Dummy: Dummy,
    Maps: Maps,
	},
	{
       
    }
);


const AppNavigator = createStackNavigator({
  Store: {
    screen: BottomNavigation
  },  
  Dummy: {
      screen: Dummy
    },
    DetailProduct: {
      screen: DetailProduct
    },
    Maps: {
      screen: Maps
    },
    
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

  export default createAppContainer(AppNavigator);