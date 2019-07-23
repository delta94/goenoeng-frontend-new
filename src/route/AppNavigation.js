
import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp/Index';
import Gateway from '../screens/Payment/Gateway';
import Receipt from '../screens/Payment/Receipt';
import Store from '../screens/Store';
import DetailProduct from '../screens/DetailProduct';
import Maps from '../screens/Maps';
import Home from '../screens/Home'
import Mountain from '../screens/Mountain'
import ProfileUser from '../screens/Profile'
import ProfileStore from '../screens/StoreProfile'
import EditProfileUser from '../screens/EditProfile'
import EditProfileStore from '../screens/EditProfileStore'
import ManageProduct from '../screens/ManageProduct'
import Transaction from '../screens/Transaction'

const BottomNavigation = createBottomTabNavigator(
  {
    Home: Home,
    Transaksi: Transaction,
    Profile: ProfileUser,
  },
  {

  }
);


const AppNavigator = createStackNavigator({
  Home: {
    screen: BottomNavigation
  },
  Store: {
    screen: Store
  },
  DetailProduct: {
    screen: DetailProduct
  },
  Maps: {
    screen: Maps
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
  Transaction: {
    screen: Transaction
  },
  Receipt: {
    screen: Receipt
  }
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default createAppContainer(AppNavigator);