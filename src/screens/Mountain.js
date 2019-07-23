import React, { Component } from 'react';
import { Platform, Text, View, TextInput, ImageBackground } from 'react-native';
import styles from '../Assets/styles'
import MountainList from '../components/MountainFlatlist'

export default class Mountain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <View style={styles.iconBox3}>
                    <ImageBackground style={{ height: 40, width: 40 }}
                            source={require('../Assets/Icons/search.png')} />
                    </View>
                    <TextInput style={{ color: '#20ab43' }} placeholder={"Search...."}></TextInput>
                    <View style={styles.iconBox2}>
                        <ImageBackground style={{ height: 40, width: 40 }}
                            source={require('../Assets/Icons/search.png')} />
                    </View>
                </View>
                <MountainList/>
                
            </View>
        );
    }
}
