import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import styles from '../Assets/styles'
import Carousel from '../components/Carousel'
import ShopSectionList from '../components/ShopSection'

export default class test extends Component{
  render() {
    return (
      <View style={styles.container}>
          <Carousel/>
          <ShopSectionList/>
        {/* <View style={styles.}> 
          
        </View> */}
      </View>
    );
  }
}

