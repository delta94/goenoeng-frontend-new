import React, {Component} from 'react';
import {Platform, Text, View, Alert, BackHandler} from 'react-native';
import styles from '../Assets/Style';
import Carousel from '../components/Carousel'
import ShopSectionList from '../components/ShopSection'
 
export default class test extends Component{
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
 
    //Code to display alert message when use click on android device back button.
    Alert.alert(
      ' Pilihan ',
      ' Mau Ke Mana ?',
      [
        { text: 'Keluar', onPress: () => BackHandler.exitApp() },
        { text: 'Tetap di Aplikasi', onPress: () => console.log('NO Pressed') }
      ],
      { cancelable: false },
    );
 
    // Return true to enable back button over ride.
    return true;
  }
  render() {
    return (
      <View style={styles.container}>
          <Carousel navigation={this.props.navigation}/>
          <ShopSectionList navigation={this.props.navigation}/>
      </View>
    );
  }
}

