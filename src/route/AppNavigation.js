import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Dummy from '../screens/dummy'
import Home from '../screens/Home'
import Mountain from '../screens/Mountain'
import ProfileUser from '../screens/Profile'
import ProfileStore from '../screens/StoreProfile'
import EditProfileUser from '../screens/EditProfile'
import EditProfileStore from '../screens/EditProfileStore'
import ManageProduct from '../screens/ManageProduct'

const BottomNavigation = createBottomTabNavigator(
  {
    Dummy: Dummy,
    Home: Home
  },
  {

  }
);


const AppNavigator = createStackNavigator({
  ManageProduct: {
    screen: ManageProduct
  },
  Mountain: {
    screen: Mountain
  },
  EditProfileStore: {
    screen: EditProfileStore
  },
  EditProfileUser: {
    screen: EditProfileUser
  },
  ProfileUser: {
    screen: ProfileUser
  },
  ProfileStore: {
    screen: ProfileStore
  },
  Home: {
    screen: BottomNavigation
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