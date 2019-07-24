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
import AddProduct from '../screens/AddProduct'
import MountainDetail from '../screens/MountainDetail'
import BookingMountain from '../screens/BookingMountain'
import Chat from '../screens/Chat'

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
  AddProduct: {
    screen: AddProduct
  },
  Mountain: {
    screen: Mountain
  },
  ManageProduct: {
    screen: ManageProduct
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
  },
  MountainDetail: {
    screen: MountainDetail
  },
  BookingMountain:{
    screen: BookingMountain
  },
  Chat:{
    screen: Chat
  }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default createAppContainer(AppNavigator);